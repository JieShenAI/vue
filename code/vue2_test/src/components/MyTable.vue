<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 400 }"
  />
  <!-- <a-table
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  /> -->
  
</template>

<script>
    const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
    }

    export default {
    name:"ChapterTwo",
    data() {
        return {
        data,
        columns,
        };
    },
    };
</script>
