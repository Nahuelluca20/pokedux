import React from "react";
import {Input} from "antd";
import {useDispatch} from "react-redux";

import {setFilter} from "@/slices/dataSlice";

export interface SearcherInterface {}

const Searcher: React.FC<SearcherInterface> = () => {
  const dispatch = useDispatch();

  return (
    <Input.Search placeholder="Buscar" onChange={(e) => dispatch(setFilter(e.target.value))} />
  );
};

export default Searcher;
