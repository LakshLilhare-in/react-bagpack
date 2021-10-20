/* eslint-disable  */
import Select from "./components/Select";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useInputs from "./hooks/useInputs";
import useBooleanToggler from "./hooks/useBoolToggler";

var ExportIt = {
    Select,
    Input,
    Navbar,
    Footer,
  hooks: {
    useInputs,
    useBooleanToggler,
  },
};

export default ExportIt;
