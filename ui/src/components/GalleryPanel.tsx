import React from 'react';
import { useGallery } from '../store/GalleryContext';
import { ImageCard } from './ImageCard';
import { BulkActionBar } from './BulkActionBar';
import { RefreshCw } from 'lucide-react';
import '../styles/Gallery.css';

export const GalleryPanel: React.FC = () => {
    const { state, refreshImages } = useGallery();

    return (
        <div className="meld-gallery">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <button
                    onClick={() => refreshImages()}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#888',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                    disabled={state.isLoading}
                >
                    <RefreshCw size={14} className={state.isLoading ? 'animate-spin' : ''} />
                    Refresh
                </button>
            </div>

            {state.error && <div className="meld-gallery__error">{state.error}</div>}

            {state.isLoading && state.images.length === 0 ? (
                <div className="meld-gallery__loading">Loading images...</div>
            ) : state.images.length === 0 ? (
                <div className="meld-gallery__empty">No images found.</div>
            ) : (
                <div className="meld-gallery__list">
                    {state.images.map(image => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            )}

            <BulkActionBar />
        </div>
    );
};
