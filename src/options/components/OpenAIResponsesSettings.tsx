import React from 'react';

interface OpenAIResponsesSettingsProps {
  openaiResponsesApiKey: string;
  setOpenaiResponsesApiKey: (key: string) => void;
  openaiResponsesBaseUrl: string;
  setOpenaiResponsesBaseUrl: (url: string) => void;
}

export function OpenAIResponsesSettings({
  openaiResponsesApiKey,
  setOpenaiResponsesApiKey,
  openaiResponsesBaseUrl,
  setOpenaiResponsesBaseUrl
}: OpenAIResponsesSettingsProps) {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="font-bold mb-2">OpenAI (Responses API) Settings</h3>
      
      <div className="form-control mb-4">
        <label htmlFor="openai-responses-api-key" className="label">
          <span className="label-text">API Key:</span>
        </label>
        <input
          type="password"
          id="openai-responses-api-key"
          value={openaiResponsesApiKey}
          onChange={(e) => setOpenaiResponsesApiKey(e.target.value)}
          placeholder="Enter your OpenAI Responses API key"
          className="input input-bordered w-full"
        />
      </div>
      
      <div className="form-control mb-4">
        <label htmlFor="openai-responses-base-url" className="label">
          <span className="label-text">Base URL (optional):</span>
        </label>
        <input
          type="text"
          id="openai-responses-base-url"
          value={openaiResponsesBaseUrl}
          onChange={(e) => setOpenaiResponsesBaseUrl(e.target.value)}
          placeholder="Custom base URL (leave empty for default)"
          className="input input-bordered w-full"
        />
      </div>
    </div>
  );
}
