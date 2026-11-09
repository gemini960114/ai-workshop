# AI 工作坊

用中文對話讓 AI Agent 直接處理地端文件，幫你做網頁、產生 Office 文件、整理公報、辨識憑證、整理會議紀錄。

> 📖 **線上課程網站**：<https://gemini960114.github.io/ai-workshop/>（含各單元簡報下載與教學影片）

## 下載課程

```bash
git clone https://github.com/gemini960114/ai-workshop.git
```

> [!IMPORTANT]
> **每個單元都要用 Antigravity 的 Open Folder 打開「該單元的資料夾」**，例如 `03-ai-workshop-office-skills`，**不要打開外層的 `ai-workshop`**。
> AI Agent 只會讀取打開的那個資料夾裡的 skill 和設定，打開外層會找不到。

## 單元

請依序進行，前面單元學到的操作，後面都會用到。每個單元的 skill 各自安裝在自己的資料夾，不會互相共用。

| 單元 | 內容 | 你會學到 |
| --- | --- | --- |
| [01 Antigravity 入門](01-ai-workshop-agy/) | 安裝 Antigravity 與工具，做第一個網頁和記憶翻牌遊戲 | 跟 AI Agent 對話、請 AI 安裝工具 |
| [02 前端設計](02-ai-workshop-frontend-design/) | 安裝 frontend-design skill，做品牌網頁，再做一次記憶翻牌 | 什麼是 skill、怎麼安裝；比較有無 skill 的差別 |
| [03 Office 文件處理](03-ai-workshop-office-skills/) | CSV → Excel → 簡報、Word 報告 → PDF 講義 | 用 docx、pdf、pptx、xlsx skill 產出可用的文件 |
| [04 立法院公報整理](04-ai-workshop-legislative-gazette/) | 查詢 6 場委員會公報，整理成 Word、PDF 報告 | 用自然語言查資料、追問出處、輸出正式文件 |
| [05 核銷憑證辨識](05-ai-workshop-voucher-ocr/) | 掃描憑證 PDF → CSV → Excel，有疑問的格子自動標黃 | 使用專案內建的 skill，搭配國網中心 GenAI Portal 模型 |
| [06 會議錄音轉紀錄](06-ai-workshop-meeting-assistant/) | 錄音 → 逐字稿 → 會議紀錄，再多輪追問 | 語音轉文字、整理紀錄、延伸成提醒信與公文 |

## 事前準備

- 課堂電腦已經裝好 Antigravity 和所有需要的工具（Git、Node.js、uv、LibreOffice、ffmpeg）。在自己的電腦上使用時，可以照 01 的步驟安裝。
- **05、06** 需要國網中心 GenAI Portal 的 API 金鑰：課堂上講師會提供範例金鑰，自己使用時請到 <https://portal.genai.nchc.org.tw/> 申請。設定方式見各單元的〈第一次使用前的設定〉。

## 注意事項

- 各單元的輸入範例放在 `example/`（04 是 `公報資料/`），AI 產生的檔案一律存在各單元的 `output/`。`output/` 和 `.env` 金鑰都不會被上傳到 GitHub。
- AI 每次產生的內容可能略有不同，和教材的範例結果不完全一樣是正常的。
