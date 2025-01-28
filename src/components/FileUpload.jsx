// FileUpload.js
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload, Paperclip, X } from "lucide-react";

const FileUploader = ({ value, onValueChange, dropzoneOptions, className }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onValueChange([...value, ...acceptedFiles]);
    },
    [value, onValueChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    ...dropzoneOptions,
  });

  return (
    <div {...getRootProps()} className={`cursor-pointer ${className}`}>
      <input {...getInputProps()} />
      <div
        id="fileInput"
        className="outline-dashed outline-1 outline-slate-500"
      >
        <div className="flex items-center justify-center flex-col p-8 w-full">
          <CloudUpload className="text-gray-500 w-10 h-10" />
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span>
            &nbsp; or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF
          </p>
        </div>
      </div>
    </div>
  );
};

const FileUploaderContent = ({ files, onRemove }) => (
  <div className="mt-4 space-y-2">
    {files.map((file, i) => (
      <div
        key={i}
        className="flex items-center justify-between bg-gray-100 rounded-md p-2"
      >
        <div className="flex items-center space-x-2">
          <Paperclip className="h-4 w-4 stroke-current" />
          <span>{file.name}</span>
        </div>
        <button
          onClick={() => onRemove(i)}
          className="text-red-500 hover:text-red-600 focus:outline-none"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    ))}
  </div>
);

const FileUpload = ({ files, setFiles }) => {
  const dropZoneConfig = {
    accept: {
      "image/svg+xml": [],
      "image/png": [],
      "image/jpeg": [],
      "image/gif": [],
    },
    multiple: true,
  };

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  return (
    <div className="relative bg-background rounded-lg p-2">
      <FileUploader
        value={files}
        onValueChange={setFiles}
        dropzoneOptions={dropZoneConfig}
        className="relative bg-background rounded-lg"
      />
      <FileUploaderContent files={files} onRemove={handleRemoveFile} />
    </div>
  );
};

export default FileUpload;
