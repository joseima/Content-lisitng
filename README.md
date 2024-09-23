<h1>A tool to create listing of high amount of content and how to filter and sort it</h1>

<a href="https://content-listing-filtering-ordering.netlify.app/" target="_blank">GIVE IT  TRY</a>

<p>  What we have here: </p>
<p> - React, Typescript with Vite</p>

<p> -   App state managed with useContext and useReducer</p>

<p> - Coding static testing via Eslint, Pretier and Standrd.js CSS with Tailwindcss</p>

<p> - Navigation with React Router</p>

<p> - Observer implemented for lazy load the <b>src</b> attribute of the images.  </p> 
<h4>About the data handling </h4>
<p>
- The main inspiration for this tool is the IMDb listings <a href="https://www.imdb.com/search/title/">https://www.imdb.com/search/title/</a> </p>
<p>
- The data source for this test is a raw JSON generated from processing the TSV tables of the IMDb database.</p>
<p>Since these files contain millions of entries, and some of the attributes we needed for the contract were in different files, I had to handle the data with Node.js in order to generate a viable JSON with all the required attributes.</p>
<p>
<b>NOTE: Since none of the TSV files include the poster URLs for the movies, I had to cross-reference the TSV data with the www.omdbapi.com API to obtain some of the poster URLs. However, some are still missing.</b></p>
<p>
- The most optimized use of this tool would be consuming a formal API, passing endpoints with query parameters that could be shared as customized movie lists.</p>
