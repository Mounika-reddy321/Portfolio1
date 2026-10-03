import React, { useState, useRef } from 'react';
import { X, Upload, Link, Image as ImageIcon, CheckCircle2, RotateCcw, Sparkles, AlertCircle, Eye } from 'lucide-react';
import { playWowSound, playNavClickSound } from '../utils/soundEffects';
import { triggerCyberBurst } from '../utils/burstEffect';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  defaultPhoto: string;
  isCustomPhoto: boolean;
  onSavePhoto: (photoDataUrl: string) => void;
  onResetPhoto: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  defaultPhoto,
  isCustomPhoto,
  onSavePhoto,
  onResetPhoto,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [previewSrc, setPreviewSrc] = useState<string>(currentPhoto);
  const [urlInput, setUrlInput] = useState<string>('');
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select an image file (PNG, JPG, JPEG, WEBP).');
      return;
    }
    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      const res = e.target?.result as string;
      if (res) {
        setPreviewSrc(res);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileChange(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setErrorMsg('Please enter a valid image URL.');
      return;
    }
    setErrorMsg(null);
    setPreviewSrc(urlInput.trim());
  };

  const handleSave = (e: React.MouseEvent) => {
    playWowSound();
    triggerCyberBurst(e.clientX, e.clientY);
    onSavePhoto(previewSrc);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetToDefault = () => {
    playNavClickSound();
    setPreviewSrc(defaultPhoto);
    setUrlInput('');
    setErrorMsg(null);
    onResetPhoto();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#0B0F28] text-white rounded-3xl shadow-2xl border border-cyan-500/40 overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white tracking-tight">
                Upload Profile Photo
              </h3>
              <p className="text-[11px] font-mono text-cyan-400">
                Permanently customize your portfolio portrait
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Tab Selector */}
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1 shadow-inner">
            <button
              onClick={() => {
                playNavClickSound();
                setActiveTab('upload');
                setErrorMsg(null);
              }}
              className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'upload'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload from Device</span>
            </button>

            <button
              onClick={() => {
                playNavClickSound();
                setActiveTab('url');
                setErrorMsg(null);
              }}
              className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'url'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Link className="w-3.5 h-3.5" />
              <span>Image URL Link</span>
            </button>
          </div>

          {/* Error notice */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Success notice */}
          {savedSuccess && (
            <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs font-mono flex items-center gap-2 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Photo saved permanently to your portfolio!</span>
            </div>
          )}

          {/* Main Work Area: Uploader + Live Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* Input Column */}
            <div className="sm:col-span-7 space-y-4">
              {activeTab === 'upload' ? (
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileChange(file);
                    }}
                    className="hidden"
                  />

                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-3 ${
                      dragOver
                        ? 'border-cyan-400 bg-cyan-950/40 ring-4 ring-cyan-500/20 scale-102'
                        : 'border-slate-700 hover:border-cyan-500/60 bg-slate-900/60 hover:bg-slate-900/90'
                    }`}
                  >
                    <div className="p-3 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-200 font-mono">
                        Click to browse or drag & drop
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        PNG, JPG, JPEG, WEBP (Any aspect ratio)
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-[10px] font-mono text-cyan-400 border border-slate-700">
                      Choose File from Computer / Mobile
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold text-slate-300">
                    Paste Image URL:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/my-photo.jpg"
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                    <button
                      onClick={handleApplyUrl}
                      className="px-3.5 py-2 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800 text-xs font-mono font-bold cursor-pointer transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    You can paste direct URLs from GitHub raw, Cloudinary, Imgur, or any public link.
                  </p>
                </div>
              )}

              {/* Permanence Explanation Note */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-cyan-400 font-mono">
                  <Sparkles className="w-3 h-3" />
                  <span>How Permanent Storage Works</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Saving here permanently stores your custom photo in browser storage (<code className="text-cyan-300 font-mono">localStorage</code>), keeping your photo active even after reloads.
                </p>
              </div>
            </div>

            {/* Live Card Preview Column */}
            <div className="sm:col-span-5 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1 font-semibold">
                <Eye className="w-3 h-3 text-cyan-400" />
                <span>Live Card Preview</span>
              </span>

              <div className="w-36 h-48 sm:w-40 sm:h-52 rounded-xl p-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-xl overflow-hidden relative">
                <img
                  src={previewSrc}
                  alt="Preview"
                  onError={() => setErrorMsg('Failed to load image from URL. Please check the link.')}
                  className="w-full h-full object-cover object-top rounded-[10px]"
                />
                <div className="absolute bottom-1 inset-x-1 py-0.5 rounded bg-black/75 backdrop-blur-md text-[9px] font-mono text-cyan-300 text-center border border-white/10">
                  {previewSrc === defaultPhoto ? 'Default Asset' : 'Custom Photo'}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20">
          <div>
            {isCustomPhoto && (
              <button
                onClick={handleResetToDefault}
                className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 font-mono cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Default</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl cursor-pointer transition-colors"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save Photo Permanently</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
