


const objCountBy = (obj) => { 
  const objArray = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      objArray.push({
        key: key,
        value: element.length
      })
    }
  }
  return objArray;
}







const groupObj = {
  JavaScript: [
    {
      title: "URL parameters as object",
      excerpt:
        "Creates an object containing the parameters of the current URL.",
      coverImage: "",
      date: "2020-03-16",
      author: [Object],
      tags: [Array],
      snippet: "JavaScript",
      subSnippet: "Browser",
      slug: "snippets/js/browser/url",
    },
    {
      title: "URL parameters as object",
      excerpt:
        "Creates an object containing the parameters of the current URL.",
      coverImage: "",
      date: "2020-03-16",
      author: [Object],
      tags: [Array],
      snippet: "JavaScript",
      subSnippet: "Date",
      slug: "snippets/js/date/formatDuration",
    },
  ],
  React: [
    {
      title: "Write a useInterval hook in React",
      excerpt:
        "Wrapping your mind around React hooks and how they interact with setInterval() can be difficult. Here's a guide to get you started.",
      coverImage: "",
      date: "2020-03-16",
      author: [Object],
      tags: [Array],
      snippet: "React",
      subSnippet: "hooks",
      slug: "snippets/react/hooks/useInterval",
    },
  ],
};


const res = objCountBy(groupObj)



console.log(res, 'ee');
