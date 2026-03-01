import type { MeldImage } from "../../../types";

export interface CommandResult {
  addTags: string[];
  removeTags: string[];
  toggleTags: string[];
  moveNext: boolean;
  movePrev: boolean;
  isDeleted: boolean;
  sendToLtSlot: string | null;
}

/**
 * Validates a shortcut command string.
 * @param command The command string to validate.
 * @returns true if the command is valid, false otherwise.
 */
export const validateShortcutCommand = (command: string): boolean => {
  if (!command.trim()) return true;
  const parts = command.trim().split(/\s+/);
  return parts.every((part) => {
    if (part === "next" || part === "prev" || part === "delete") return true;
    if (part.startsWith("tag:") && part.length > 4) return true;
    if (part.startsWith("-tag:") && part.length > 5) return true;
    if (part.startsWith("tag-toggle:") && part.length > 11) return true;
    if (part.startsWith("lt:") && part.length > 3) return true;
    return false;
  });
};

/**
 * Parses a shortcut command string into a structured object.
 * @param command The command string to parse.
 * @param currentImage Optional current image to handle toggles immediately if needed.
 *                     If not provided, toggles are returned as a list of tags.
 * @returns A structured result of the parsed command.
 */
export const parseShortcutCommand = (
  command: string,
  currentImage?: MeldImage,
): CommandResult => {
  const parts = command.trim().split(/\s+/);
  const result: CommandResult = {
    addTags: [],
    removeTags: [],
    toggleTags: [],
    moveNext: false,
    movePrev: false,
    isDeleted: false,
    sendToLtSlot: null,
  };

  const currentTags = currentImage?.tags || [];

  for (const part of parts) {
    if (part.startsWith("tag:")) {
      const tag = part.substring(4);
      if (tag && !result.addTags.includes(tag)) {
        result.addTags.push(tag);
      }
    } else if (part.startsWith("-tag:")) {
      const tag = part.substring(5);
      if (tag && !result.removeTags.includes(tag)) {
        result.removeTags.push(tag);
      }
    } else if (part.startsWith("tag-toggle:")) {
      const tag = part.substring(11);
      if (tag) {
        if (currentImage) {
          if (currentTags.includes(tag)) {
            if (!result.removeTags.includes(tag)) result.removeTags.push(tag);
          } else {
            if (!result.addTags.includes(tag)) result.addTags.push(tag);
          }
        } else {
          if (!result.toggleTags.includes(tag)) result.toggleTags.push(tag);
        }
      }
    } else if (part === "next") {
      result.moveNext = true;
    } else if (part === "prev") {
      result.movePrev = true;
    } else if (part === "delete") {
      result.isDeleted = true;
    } else if (part.startsWith("lt:")) {
      const slotId = part.substring(3);
      if (slotId) result.sendToLtSlot = slotId;
    }
  }

  return result;
};
