import React from "react";
import {Input} from "antd";

export interface SearcherInterface {}

const Searcher: React.FC<SearcherInterface> = () => {
  return <Input.Search placeholder="Buscar" />;
};

export default Searcher;
