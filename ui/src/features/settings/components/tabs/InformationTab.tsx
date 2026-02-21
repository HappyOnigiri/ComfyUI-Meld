import type React from "react";

export const InformationTab: React.FC = () => {
	return (
		<div className="meld-settings-list meld-information-tab">
			<div className="meld-settings-group">
				<div className="meld-settings-group-title">ComfyUI Meld</div>
				<div className="meld-settings-item">
					<div className="meld-settings-item__info">
						<div className="meld-settings-item__label">Version</div>
						<div className="meld-settings-item__description">
							{__APP_VERSION__}
						</div>
					</div>
				</div>
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Author & Links</div>
				<div className="meld-settings-item">
					<div className="meld-settings-item__info">
						<div className="meld-settings-item__label">Author</div>
						<div className="meld-settings-item__description">HappyOnigiri</div>
					</div>
				</div>
				<a
					href="https://github.com/HappyOnigiri/ComfyUI-Meld"
					target="_blank"
					rel="noopener noreferrer"
					className="meld-settings-item meld-settings-item--link"
					style={{ textDecoration: "none" }}
				>
					<div className="meld-settings-item__info">
						<div
							className="meld-settings-item__label"
							style={{ color: "var(--meld-accent-color)" }}
						>
							GitHub Repository
						</div>
						<div className="meld-settings-item__description">
							Star the project or fork it
						</div>
					</div>
				</a>
				<a
					href="https://github.com/HappyOnigiri/ComfyUI-Meld/issues/new/choose"
					target="_blank"
					rel="noopener noreferrer"
					className="meld-settings-item meld-settings-item--link"
					style={{ textDecoration: "none" }}
				>
					<div className="meld-settings-item__info">
						<div
							className="meld-settings-item__label"
							style={{ color: "var(--meld-accent-color)" }}
						>
							Bug Tracker
						</div>
						<div className="meld-settings-item__description">
							Report issues or suggest features
						</div>
					</div>
				</a>
				<a
					href="https://x.com/H_OnigiriWorks"
					target="_blank"
					rel="noopener noreferrer"
					className="meld-settings-item meld-settings-item--link"
					style={{ textDecoration: "none" }}
				>
					<div className="meld-settings-item__info">
						<div
							className="meld-settings-item__label"
							style={{ color: "var(--meld-accent-color)" }}
						>
							X (Twitter)
						</div>
						<div className="meld-settings-item__description">
							Follow for updates and news
						</div>
					</div>
				</a>
			</div>

			<div
				style={{
					marginTop: "40px",
					fontSize: "11px",
					color: "var(--meld-text-secondary)",
					textAlign: "center",
				}}
			>
				&copy; 2024-{new Date().getFullYear()} HappyOnigiri
			</div>
		</div>
	);
};
