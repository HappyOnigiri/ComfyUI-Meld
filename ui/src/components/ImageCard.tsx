import React from 'react';
import { MeldImage } from '../types';
import { useGallery } from '../store/GalleryContext';

interface ImageCardProps {
    image: MeldImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    const { state, dispatch } = useGallery();
    const isSelected = state.selectedIds.has(image.id);

    const fullFilename = image.subfolder ? `${image.subfolder}/${image.filename}` : image.filename;
    const imgSrc = `/view?filename=${encodeURIComponent(fullFilename)}&type=${image.type || 'output'}`;

    const handleClick = (e: React.MouseEvent) => {
        // Ctrl/Metaキーが押されているか、既に何かが選択されている場合は選択モード
        if (e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
            e.preventDefault();
            e.stopPropagation();
            dispatch({ type: 'TOGGLE_SELECT', payload: image.id });
        } else {
            // 単体クリック時は画像を開く（既存の挙動を維持）
            window.open(imgSrc, "_blank");
        }
    };

    const handleContainerClick = (e: React.MouseEvent) => {
        // カード全体をクリックした時は常に選択トグル（既存の挙動を維持）
        dispatch({ type: 'TOGGLE_SELECT', payload: image.id });
    };

    return (
        <div
            className={`meld-image-card ${isSelected ? 'meld-image-card--selected' : ''}`}
            onClick={handleContainerClick}
        >
            <div className="meld-image-card__thumbnail-wrapper">
                <img
                    src={imgSrc}
                    className="meld-image-card__thumbnail"
                    alt={image.filename}
                    loading="lazy"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClick(e);
                    }}
                />
            </div>
            <div className="meld-image-card__details">
                <div className="meld-image-card__filename">{fullFilename}</div>

                <div className="meld-image-card__meta-label">Positive</div>
                <div className="meld-image-card__meta-content">{image.positive || "-"}</div>

                <div className="meld-image-card__meta-label">Negative</div>
                <div className="meld-image-card__meta-content" style={{ maxHeight: '40px' }}>{image.negative || "-"}</div>

                <div className="meld-image-card__meta-label">Tags</div>
                <div className="meld-image-card__tags">
                    {image.tags && image.tags.length > 0 ? (
                        image.tags.map((tag, i) => (
                            <span key={i} className="meld-image-card__tag">{tag}</span>
                        ))
                    ) : (
                        <span style={{ color: '#666' }}>-</span>
                    )}
                </div>
            </div>
        </div>
    );
};
