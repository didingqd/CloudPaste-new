// 文件预览页面的公共工具函数
import * as MimeTypeUtils from "../../utils/mimeTypeUtils";

/**
 * 格式化文件大小
 * @param {number} bytes - 文件大小（字节）
 * @returns {string} 格式化后的文件大小
 */
export const formatFileSize = (bytes) => {
  return MimeTypeUtils.formatFileSize(bytes, true); // 使用中文单位
};

// 导入统一的时间处理工具
import { formatDateTime as formatDateTimeUtil } from "../../utils/timeUtils.js";

/**
 * 格式化日期时间 - 使用统一的时间处理工具
 * @param {string} dateString - UTC 时间字符串
 * @returns {string} 格式化后的本地时间字符串
 */
export const formatDateTime = (dateString) => {
  return formatDateTimeUtil(dateString);
};

/**
 * 获取文件类型的图标类名
 * @param {string} mimetype - 文件的MIME类型
 * @param {boolean} darkMode - 是否为暗色模式
 * @param {string} filename - 文件名（可选）
 * @returns {string} 对应的图标类名
 */
export const getFileIconClass = (mimetype, darkMode = false, filename) => {
  return MimeTypeUtils.getFileIconClass(mimetype, darkMode, filename);
};

/**
 * 格式化MIME类型为可读的文件类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {string} 格式化后的文件类型
 */
export const formatMimeType = (mimetype, filename) => {
  return MimeTypeUtils.formatMimeType(mimetype, filename);
};

/**
 * 检查是否为图片类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为图片类型
 */
export const isImageType = (mimetype, filename) => {
  return MimeTypeUtils.isImageType(mimetype, filename);
};

/**
 * 检查是否为视频类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为视频类型
 */
export const isVideoType = (mimetype, filename) => {
  return MimeTypeUtils.isVideoType(mimetype, filename);
};

/**
 * 检查是否为音频类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为音频类型
 */
export const isAudioType = (mimetype, filename) => {
  return MimeTypeUtils.isAudioType(mimetype, filename);
};

/**
 * 检查是否为PDF类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为PDF类型
 */
export const isPdfType = (mimetype, filename) => {
  return MimeTypeUtils.isPdfType(mimetype, filename);
};

/**
 * 获取用户的认证状态
 * @deprecated 请直接使用认证Store: const authStore = useAuthStore()
 * @returns {Object} 包含isAdmin, hasApiKey和hasFilePermission的认证状态对象
 */
export const getAuthStatus = () => {
  console.error("getAuthStatus已废弃，请直接使用认证Store");
  throw new Error("此函数已废弃，请直接使用 useAuthStore()");
};

/**
 * 检查是否为Markdown类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为Markdown类型
 */
export const isMarkdownType = (mimetype, filename) => {
  return MimeTypeUtils.isMarkdownType(mimetype, filename);
};

/**
 * 检查是否为HTML类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为HTML类型
 */
export const isHtmlType = (mimetype, filename) => {
  if (mimetype === "text/html") return true;
  if (filename && filename.toLowerCase().endsWith(".html")) return true;
  if (filename && filename.toLowerCase().endsWith(".htm")) return true;
  return false;
};

/**
 * 检查是否为文本类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为文本类型
 */
export const isTextType = (mimetype, filename) => {
  return MimeTypeUtils.isTextType(mimetype, filename);
};

/**
 * 检查是否为代码文件类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为代码文件类型
 */
export const isCodeType = (mimetype, filename) => {
  return MimeTypeUtils.isCodeType(mimetype, filename);
};

/**
 * 检查是否为配置文件类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为配置文件类型
 */
export const isConfigType = (mimetype, filename) => {
  return MimeTypeUtils.isConfigType(mimetype, filename);
};

/**
 * 检查是否为Word文档类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为Word文档类型
 */
export const isWordDocumentType = (mimetype, filename) => {
  if (!filename && !mimetype) return false;

  // 检查MIME类型
  if (mimetype) {
    if (mimetype === "application/msword") return true;
    if (mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") return true;
    if (mimetype === "application/vnd.oasis.opendocument.text") return true;
    if (mimetype === "application/rtf") return true;
  }

  // 检查文件扩展名
  if (filename) {
    const ext = filename.split(".").pop().toLowerCase();
    return ["doc", "docx", "odt", "rtf"].includes(ext);
  }

  return false;
};

/**
 * 检查是否为Excel表格类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为Excel表格类型
 */
export const isSpreadsheetType = (mimetype, filename) => {
  if (!filename && !mimetype) return false;

  // 检查MIME类型
  if (mimetype) {
    if (mimetype === "application/vnd.ms-excel") return true;
    if (mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") return true;
    if (mimetype === "application/vnd.oasis.opendocument.spreadsheet") return true;
  }

  // 检查文件扩展名
  if (filename) {
    const ext = filename.split(".").pop().toLowerCase();
    return ["xls", "xlsx", "ods", "csv"].includes(ext);
  }

  return false;
};

/**
 * 检查是否为PowerPoint演示文稿类型
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为PowerPoint演示文稿类型
 */
export const isPresentationType = (mimetype, filename) => {
  if (!filename && !mimetype) return false;

  // 检查MIME类型
  if (mimetype) {
    if (mimetype === "application/vnd.ms-powerpoint") return true;
    if (mimetype === "application/vnd.openxmlformats-officedocument.presentationml.presentation") return true;
    if (mimetype === "application/vnd.oasis.opendocument.presentation") return true;
  }

  // 检查文件扩展名
  if (filename) {
    const ext = filename.split(".").pop().toLowerCase();
    return ["ppt", "pptx", "odp"].includes(ext);
  }

  return false;
};

/**
 * 检查是否为任意Office文件类型（Word、Excel、PowerPoint）
 * @param {string} mimetype - 文件的MIME类型
 * @param {string} filename - 文件名（可选）
 * @returns {boolean} 是否为Office文件类型
 */
export const isOfficeFileType = (mimetype, filename) => {
  return isWordDocumentType(mimetype, filename) || isSpreadsheetType(mimetype, filename) || isPresentationType(mimetype, filename);
};
