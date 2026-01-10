import React from 'react';
import { useGallery } from '../store/GalleryContext';
import { Trash2, X } from 'lucide-react';

export const BulkActionBar: React.FC = () => {
    const { state, dispatch, deleteSelected } = useGallery();
    const count = state.selectedIds.size;

    if (count === 0) return null;

    return (
        <div className="meld-bulk-bar">
            <span className="meld-bulk-bar__info">{count} items selected</span>

            <button
                className="meld-bulk-bar__button meld-bulk-bar__button--delete"
                onClick={deleteSelected}
            >
                <Trash2 size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Delete
            </button>

            <button
                className="meld-bulk-bar__button meld-bulk-bar__button--cancel"
                onClick={() => dispatch({ type: 'CLEAR_SELECTION' })}
            >
                <X size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Cancel
            </button>
        </div>
    );
};
