# Hotel_reservation-With-React
Hotel_reservation-With-React

## 心得

1. 這禮拜其實滿廢的，一直到禮拜六才開始處理切版，也還好一開始有稍微想過 API 的部分怎麼處理才來得及。
2. 因為使用到 API ，所以用了 Redux-Saga ，這部分的程式碼在 `./action/hotel.ts` 當中，通常用到 API 我都會預先寫測試用的 Ptototype ，好奇內容可以查看 `MainPrototype` 。
3. 卡了驗證的部分卡很久，這裡也是我覺得寫得不太好的地方，因為我把驗證的邏輯直接寫在 Component 中，如果時間更多，應該會試著把寫在金流那週的驗證拿來用。
4. 這一次的 Class 寫得還不錯，哈哈哈，都很乾淨的處理自己該做的事情，然後由 Saga 呼叫後再將資料放置 Redux 的 Store 保存，這是比較滿意的地方。
5. 這禮拜應該是很好寫測試的，但起手時間太短，如果之後要補測試，應該會從這週開始補。
6. 有些地方屬於硬幹的，包含直接在 `./dist/utils` 中為原生的 Date 加上 `addDays` 的方法，以及直接在 `./dist/index.html` 中寫下被預約日期的 `style` ，以上兩個都不是很好的做法，之後寫測試時候一併改進。
7. 最後是日期的處理真的很麻煩，嗚嗚。

## 運行

1. clone 到專案資料夾。
2. 運行指令 `npm install` 。
3. 運行 `npm run start` 。
4. 啟動瀏覽器 `http://localhost:8000/dist` 。

## 測試（未完成）

1. 運行指令 `npm run test` 。

