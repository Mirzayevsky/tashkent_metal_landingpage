import React, { useEffect, useState } from "react";
import {
  NavItem,
  NavsWrapper,
  ProductFilterWrapper,
  SearchInputBox,
} from "./styles";
import { Menu, Dropdown, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";
import Text from "../../language/langManager";

// icons
import { ReactComponent as MenuBar } from "../../assets/icon/menu-bar.svg";

import { ReactComponent as SearchIcon } from "../../assets/icon/search-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../redux/modules/getCategories";

function ProductFilter({ search, setSearch, category, setCategory }) {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCategoriesAction());
    // setSearchParams({});
  }, []);

  const state = useSelector((state) => state);
  const categories = state.categories;

  const [visibility, setVisibility] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="3">3rd menu item（disabled）</Menu.Item>
    </Menu>
  );

  const filterCategory = (id, isChecked) => {
    if (isChecked) {
      if (!category.filter((cId) => cId === id).length > 0) {
        setCategory([...category, id]);
      }
    } else {
      if (category.filter((cId) => cId === id).length > 0) {
        setCategory(category.filter((cId) => cId !== id));
      }
    }
  };

  return (
    <ProductFilterWrapper>
      <SearchInputBox>
        <SearchIcon />
        <input
          type="search"
          placeholder={Text({ id: "search" })}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchInputBox>
      <NavsWrapper>
        {/* <NavItem mobileFilter>
          <Text id="filter" />
        </NavItem> */}

        {/* <NavItem>
          <Text id="filterSales" />
        </NavItem> */}
        <NavItem>
          <Dropdown
            visible={visibility}
            onVisibleChange={(e) => setVisibility(e)}
            overlay={
              <Menu>
                {categories.data.map(({ id, name }) => (
                  <Menu.Item key={id}>
                    <Checkbox
                      checked={category.includes(id)}
                      onChange={(e) => filterCategory(id, e.target.checked)}
                    >
                      {name}
                    </Checkbox>
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <a className="category" onClick={(e) => e.preventDefault()}>
              <span className="text">
                <Text id="category" /> <DownOutlined />
              </span>
              <span className="icon">
                <MenuBar />
              </span>
            </a>
          </Dropdown>
        </NavItem>
      </NavsWrapper>
    </ProductFilterWrapper>
  );
}

export default ProductFilter;
