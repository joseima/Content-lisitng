
export const AboutUs  : React.FC = () => {

  return (
      <div className=' w-80 section'>
      <h1 className="text-xl  mb-6 w-80">About this listing</h1>
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
        <h4>About the app </h4>
        <p>
        - The app is mounted with React and tailwindscss.</p>
        <p>
        - The development environment uses Vite and the SWC compiler, along with TypeScript, ESLint with Standard.js, and Prettier..</p>
        <p>
        - In the listing I used an observer for lazy load the <b>src</b> attribute of the images.
        </p>
      </div>
  )
}