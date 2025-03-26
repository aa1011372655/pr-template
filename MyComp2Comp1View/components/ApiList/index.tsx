import React, { useState } from 'react';
import { Input, Checkbox } from 'antd';
import {
  SearchOutlined,
  CaretDownFilled,
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';

import styles from './index.module.less';

const ApiList: React.FC = () => {
  const [searchPlaceholderValue, setSearchPlaceholderValue] = useState('');
  const [fuzzySearchAssetsChecked, setFuzzySearchAssetsChecked] =
    useState(false);
  const [urlQueryAssetsChecked, setUrlQueryAssetsChecked] = useState(false);
  const [genTokenAdminChecked, setGenTokenAdminChecked] = useState(false);
  const [getBoardGroupsChecked, setGetBoardGroupsChecked] = useState(false);
  const [fetchBoardChecked, setFetchBoardChecked] = useState(true);
  const [sketchAssetsChecked, setSketchAssetsChecked] = useState(true);
  const [searchPlaceholderValue2, setSearchPlaceholderValue2] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.apiContainer}>
        <div className={styles.apiSection}>
          <div className={styles.apiHeader}>
            <span className={styles.apiCount}>27项</span>
            <span className={styles.apiTitle}>API 列表</span>
          </div>
          <Input
            placeholder="请输入搜索内容"
            prefix={<SearchOutlined className={styles.searchIcon} />}
            value={searchPlaceholderValue}
            onChange={e => {
              setSearchPlaceholderValue(e.target.value);
            }}
            className={styles.searchInput}
          />
          <div className={styles.dropdownMenu}>
            <CaretDownFilled className={styles.dropdownIcon} />
            <div className={styles.controllerSection}>
              <span className={styles.controllerTitle}>OpenAPIController</span>
              <Checkbox
                checked={fuzzySearchAssetsChecked}
                onChange={e => {
                  setFuzzySearchAssetsChecked(e.target.checked);
                }}
                className={styles.assetSearchCheckbox}
              >
                模糊搜索资产列表(POST /api/v1/openapi/searchAssets)
              </Checkbox>
              <div className={styles.checkboxRow}>
                <Checkbox
                  checked={urlQueryAssetsChecked}
                  onChange={e => {
                    setUrlQueryAssetsChecked(e.target.checked);
                  }}
                  className={styles.urlQueryCheckbox}
                />
                <div className={styles.querySection}>
                  <span className={styles.controllerTitle}>
                    URL反查询资产信息(POST
                  </span>
                  <span className={styles.urlQueryEndpoint}>
                    /api/v1/openapi/queryAssetByURL)
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.dividerLine} />
          </div>
          <div className={styles.checkboxRow}>
            <Checkbox
              checked={genTokenAdminChecked}
              onChange={e => {
                setGenTokenAdminChecked(e.target.checked);
              }}
              className={styles.tokenGenerationCheckbox}
            />
            <div className={styles.querySection}>
              <span className={styles.tokenTitle}>
                超管接口：生成 token(POST
              </span>
              <span className={styles.urlQueryEndpoint}>
                /api/v1/openapi/generateToken)
              </span>
            </div>
          </div>
          <Checkbox
            checked={getBoardGroupsChecked}
            onChange={e => {
              setGetBoardGroupsChecked(e.target.checked);
            }}
            className={styles.boardGroupListCheckbox}
          >
            获取画板分组列表(POST
          </Checkbox>
          <span className={styles.boardGroupListTitle}>
            /api/v1/openapi/getBoardGroupList)
          </span>
          <Checkbox
            checked={fetchBoardChecked}
            onChange={e => {
              setFetchBoardChecked(e.target.checked);
            }}
            className={styles.boardListCheckbox}
          >
            获取 画板(POST /api/v1/openapi/getBoardList)
          </Checkbox>
          <span className={styles.boardExtractionTitle}>
            超管接口：获取需要待提取画板到conformity_board的
          </span>
          <Checkbox
            checked={sketchAssetsChecked}
            onChange={e => {
              setSketchAssetsChecked(e.target.checked);
            }}
            className={styles.sketchAssetCheckbox}
          >
            sketch 资产(POST
          </Checkbox>
          <span className={styles.sketchAssetEndpoint}>
            lanilvv1lonenanilquervFileToConformitvBoard)
          </span>
        </div>
        <div className={styles.controllerSection}>
          <RightOutlined className={styles.rightArrowIcon} />
          <div className={styles.iconColumn}>
            <LeftOutlined className={styles.leftArrowIcon} />
          </div>
        </div>
        <div className={styles.selectedApiSection}>
          <div className={styles.selectedApiContainer}>
            <span className={styles.tokenTitle}>0项</span>
            <span className={styles.tokenTitle}>已选择API</span>
          </div>
          <Input
            placeholder="请输入搜索内容"
            prefix={<SearchOutlined className={styles.searchIcon} />}
            value={searchPlaceholderValue2}
            onChange={e => {
              setSearchPlaceholderValue2(e.target.value);
            }}
            className={styles.secondarySearchInput}
          />
          <img
            alt=""
            src="https://weavefox.alipay.com/assets/d0f5249c-c01d-4898-a78e-1118359f522b.png"
            className={styles.imageDisplay}
          />
          <span className={styles.noDataMessage}>暂无数据</span>
        </div>
      </div>
    </div>
  );
};

export default ApiList;
