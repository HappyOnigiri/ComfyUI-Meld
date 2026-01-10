import React, { createContext, useContext, useReducer, ReactNode, useCallback, useEffect } from 'react';
import { GalleryState, GalleryAction, MeldImage } from '../types';
import { galleryReducer, initialState } from './galleryReducer';
import * as api from '../api';

interface GalleryContextType {
    state: GalleryState;
    dispatch: React.Dispatch<GalleryAction>;
    refreshImages: () => Promise<void>;
    deleteSelected: () => Promise<void>;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(galleryReducer, initialState);

    const refreshImages = useCallback(async () => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const images = await api.fetchImages();
            dispatch({ type: 'SET_IMAGES', payload: images });
        } catch (err: any) {
            dispatch({ type: 'SET_ERROR', payload: err.message });
        }
    }, []);

    const deleteSelected = useCallback(async () => {
        if (state.selectedIds.size === 0) return;

        const ids = Array.from(state.selectedIds) as number[];
        const confirmMsg = `Are you sure you want to delete the selected ${ids.length} images?\n\n[WARNING]\nPhysical files will also be permanently deleted. This operation cannot be undone.`;

        if (window.confirm(confirmMsg)) {
            dispatch({ type: 'SET_LOADING', payload: true });
            try {
                await api.deleteImages(ids, true);
                dispatch({ type: 'CLEAR_SELECTION' });
                await refreshImages();
            } catch (err: any) {
                dispatch({ type: 'SET_ERROR', payload: err.message });
            }
        }
    }, [state.selectedIds, refreshImages]);

    useEffect(() => {
        const handleRefresh = () => {
            refreshImages();
        };
        window.addEventListener('meld-nexus-refresh', handleRefresh);
        return () => {
            window.removeEventListener('meld-nexus-refresh', handleRefresh);
        };
    }, [refreshImages]);

    useEffect(() => {
        refreshImages();
    }, [refreshImages]);

    return (
        <GalleryContext.Provider value={{ state, dispatch, refreshImages, deleteSelected }}>
            {children}
        </GalleryContext.Provider>
    );
};

export const useGallery = () => {
    const context = useContext(GalleryContext);
    if (context === undefined) {
        throw new Error('useGallery must be used within a GalleryProvider');
    }
    return context;
};
