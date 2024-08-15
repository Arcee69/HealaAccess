import t from "prop-types";
// import useAlert from "./useAlert";

export const useCopy = () => {
  // const { displayAlert } = useAlert();

  const copyToClipBoard = (text, name) => {
    try {
      navigator?.clipboard?.writeText(text);
      alert("Copied", `${name ? name : "Text"} copied!`);
    } catch (error) {
      console.log(error);
      alert("error", `Couldn't copy ${name ? name : "Text"}!`);
    }
  };

  return {
    copyToClipBoard,
  };
};

useCopy.PropTypes = {
  text: t.string,
  name: t.string,
};
