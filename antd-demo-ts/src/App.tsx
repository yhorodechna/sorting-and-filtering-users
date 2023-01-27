import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';

const { Search } = Input;


const onSearch = (value: string) => console.log(value);

const App: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    
  </Space>
);

export default App;