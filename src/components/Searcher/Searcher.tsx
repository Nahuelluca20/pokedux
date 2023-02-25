import React from "react";
import {Input} from "antd";
import {useDispatch} from "react-redux";

export interface SearcherInterface {}

const Searcher: React.FC<SearcherInterface> = () => {
  const dispatch = useDispatch();

  return <Input.Search placeholder="Buscar" />;
};

export default Searcher;
