import type React from "react";
import type { DatabaseSummary, Settings } from "../../../../types";
import { SettingItem } from "../SettingItem";

interface SystemTabProps {
	localSettings: Settings;
	handleNumberChange: (key: keyof Settings, value: string, min?: number, max?: number) => void;
	handleNumberBlur: (config: { key: keyof Settings }) => void;
	handleToggle: (key: keyof Settings, currentValue: boolean) => void;
	setLocalSettings: React.Dispatch<React.SetStateAction<Settings>>;
	handleViewTrash: () => void;
	handleClearThumbnailCache: () => void | Promise<void>;
	// Input states
	lineageMaxDepthInput: string;
	trashRetentionDaysInput: string;
	autoLinkPhashThresholdInput: string;
	suggestPhashThresholdInput: string;
	databases: DatabaseSummary[];
	activeDatabaseName: string | null;
	databaseNameInput: string;
	setDatabaseNameInput: React.Dispatch<React.SetStateAction<string>>;
	getRenameDraftForDatabase: (databaseName: string) => string;
	setRenameDraftForDatabase: (databaseName: string, nextValue: string) => void;
	isDatabaseLoading: boolean;
	handleCreateDatabase: () => void | Promise<void>;
	handleRenameDatabase: (database: DatabaseSummary) => void;
	handleSwitchDatabase: (database: DatabaseSummary) => void;
	handleDeleteDatabase: (database: DatabaseSummary) => void;
}

export const SystemTab: React.FC<SystemTabProps> = ({
	localSettings,
	handleNumberChange,
	handleNumberBlur,
	handleToggle,
	setLocalSettings,
	handleViewTrash,
	handleClearThumbnailCache,
	lineageMaxDepthInput,
	trashRetentionDaysInput,
	autoLinkPhashThresholdInput,
	suggestPhashThresholdInput,
	databases,
	activeDatabaseName,
	databaseNameInput,
	setDatabaseNameInput,
	getRenameDraftForDatabase,
	setRenameDraftForDatabase,
	isDatabaseLoading,
	handleCreateDatabase,
	handleRenameDatabase,
	handleSwitchDatabase,
	handleDeleteDatabase,
}) => {
	return (
		<div className="meld-settings-list">
			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Image Matching</div>
				<SettingItem
					label="Source Matching Strategy"
					description="Algorithm used to identify the source image."
				>
					<select
						className="meld-select"
						value={localSettings["gallery.matching_strategy"]}
						onChange={(e) =>
							setLocalSettings((prev) => ({
								...prev,
								"gallery.matching_strategy": e.target
									.value as Settings["gallery.matching_strategy"],
							}))
						}
					>
						<option value="phash_created">pHash &amp; Created Time</option>
						<option value="filename_phash">Filename -&gt; pHash</option>
						<option value="phash_only">pHash Only</option>
					</select>
				</SettingItem>

				<SettingItem
					label="Auto Linking Threshold (%)"
					description="Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links."
				>
					<input
						type="number"
						className="meld-number-input"
						value={autoLinkPhashThresholdInput}
						min={0}
						max={100}
						onChange={(e) =>
							handleNumberChange("gallery.auto_link_phash_threshold", e.target.value, 0, 100)
						}
						onBlur={() => handleNumberBlur({ key: "gallery.auto_link_phash_threshold" })}
					/>
				</SettingItem>

				<SettingItem
					label="Source Suggestion Threshold (%)"
					description="Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors."
				>
					<input
						type="number"
						className="meld-number-input"
						value={suggestPhashThresholdInput}
						min={0}
						max={100}
						onChange={(e) =>
							handleNumberChange("gallery.suggest_phash_threshold", e.target.value, 0, 100)
						}
						onBlur={() => handleNumberBlur({ key: "gallery.suggest_phash_threshold" })}
					/>
				</SettingItem>

				<SettingItem
					label="Inherit Tags from Source"
					description="Automatically copy tags from the source image when a new image is registered or saved."
				>
					<label className="meld-switch">
						<input
							type="checkbox"
							checked={localSettings["gallery.inherit_tags"]}
							onChange={() =>
								handleToggle("gallery.inherit_tags", localSettings["gallery.inherit_tags"])
							}
						/>
						<span className="meld-switch__slider" />
					</label>
				</SettingItem>
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Lineage</div>
				<SettingItem
					label="Max Lineage Depth"
					description="Maximum number of ancestor levels to fetch and display (1-10)."
				>
					<input
						type="number"
						className="meld-number-input"
						value={lineageMaxDepthInput}
						min={1}
						max={10}
						onChange={(e) => handleNumberChange("gallery.lineage_max_depth", e.target.value, 1, 10)}
						onBlur={() => handleNumberBlur({ key: "gallery.lineage_max_depth" })}
					/>
				</SettingItem>
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Database</div>
				<SettingItem
					label="Create Database"
					description="Create a new empty database file. Creation uses a confirmation modal."
				>
					<div className="meld-settings-inline-actions">
						<input
							type="text"
							className="meld-input"
							value={databaseNameInput}
							onChange={(e) => setDatabaseNameInput(e.target.value)}
							placeholder="database_name"
							disabled={isDatabaseLoading}
							aria-label="Database name"
						/>
						<button
							type="button"
							className="meld-button meld-button--secondary"
							onClick={handleCreateDatabase}
							disabled={isDatabaseLoading || databaseNameInput.trim().length === 0}
						>
							Create
						</button>
					</div>
				</SettingItem>

				<div className="meld-settings-database-list" role="list" aria-label="Database list">
					{databases.map((database) => (
						<div key={database.name} className="meld-settings-database-card" role="listitem">
							<div className="meld-settings-database-card__info">
								<div className="meld-settings-database-card__title-row">
									<span className="meld-settings-database-card__title">{database.name}</span>
									{database.is_active && (
										<span className="meld-settings-database-card__badge">Active</span>
									)}
								</div>
								<div className="meld-settings-database-card__meta">
									<span>{database.filename}</span>
									<span>{database.image_count} images</span>
									{activeDatabaseName === database.name && <span>Currently loaded</span>}
								</div>
							</div>
							<div className="meld-settings-database-card__actions">
								<input
									type="text"
									className="meld-input meld-settings-database-card__rename-input"
									value={getRenameDraftForDatabase(database.name)}
									onChange={(e) => setRenameDraftForDatabase(database.name, e.target.value)}
									placeholder="new_database_name"
									disabled={isDatabaseLoading}
									aria-label={`Rename ${database.name}`}
								/>
								<button
									type="button"
									className="meld-button meld-button--secondary"
									onClick={() => handleRenameDatabase(database)}
									disabled={
										isDatabaseLoading ||
										getRenameDraftForDatabase(database.name).trim().length === 0 ||
										getRenameDraftForDatabase(database.name).trim() === database.name
									}
								>
									Rename
								</button>
								<button
									type="button"
									className="meld-button meld-button--secondary"
									onClick={() => handleSwitchDatabase(database)}
									disabled={isDatabaseLoading || database.is_active}
								>
									Switch
								</button>
								<button
									type="button"
									className="meld-btn meld-btn--danger"
									onClick={() => handleDeleteDatabase(database)}
									disabled={isDatabaseLoading || !database.can_delete}
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Thumbnail Cache</div>
				<SettingItem
					label="Clear Thumbnail Cache"
					description="Delete all cached thumbnails. They will be regenerated on next view."
				>
					<button
						type="button"
						className="meld-button meld-button--secondary"
						onClick={handleClearThumbnailCache}
					>
						Clear Thumbnail Cache
					</button>
				</SettingItem>
			</div>

			<div className="meld-settings-group">
				<div className="meld-settings-group-title">Trash</div>
				<SettingItem
					label="Trash Retention Period (Days)"
					description="How many days to keep deleted items in trash (0-365)."
				>
					<input
						type="number"
						className="meld-number-input"
						value={trashRetentionDaysInput}
						min={0}
						max={365}
						onChange={(e) =>
							handleNumberChange("gallery.trash_retention_days", e.target.value, 0, 365)
						}
						onBlur={() => handleNumberBlur({ key: "gallery.trash_retention_days" })}
					/>
				</SettingItem>

				<SettingItem
					label="Trash Management"
					description="View and manage items currently in the trash bin."
				>
					<button
						type="button"
						className="meld-button meld-button--secondary"
						onClick={handleViewTrash}
					>
						View Trash
					</button>
				</SettingItem>
			</div>
		</div>
	);
};
