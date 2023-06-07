import React from 'react';
import { Pagination, Group } from '@mantine/core';

type PagerProps = {
  page: number;
  onChange: (value: number) => void;
  total: number;
};

const Pager: React.FC<PagerProps> = ({ page, onChange, total }) => {
  const handlePageChange = (newPage: number) => {
    onChange(newPage);
  };

  return (
    <Group position="center" mb={20}>
      <Pagination value={page} onChange={handlePageChange} total={total} />
    </Group>
  );
};

export default Pager;