import React from "react";
import {Input} from "antd";
import {useDispatch} from "react-redux";

export interface SearcherInterface {
  handleChange: any;
}

const Searcher: React.FC<SearcherInterface> = ({handleChange}) => {
  const dispatch = useDispatch();

  return (
    <Input.Search
      placeholder="Buscar"
      style={{width: "100%"}}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Searcher;
