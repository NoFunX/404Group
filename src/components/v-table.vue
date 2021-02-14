<template>
    <div class="v-table">
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th class="v-table_cell">Type Stats</th>
                    <td class="v-table_cell" v-for="(data,index) in request_data[0].data" :key="index"> 
                        {{ new Date(data.date).getDate()}} {{  setData(data.date) }} {{ new Date(data.date).getFullYear()}}
                        </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="v-table_cell">queries</th>
                    <td class="v-table_cell" v-for="(data,index) in request_data[0].data" :key="index"> {{ data.value }}</td>
                </tr>
                <tr>
                    <th class="v-table_cell">groups</th>
                    <td class="v-table_cell" v-for="(data,index) in request_data[1].data" :key="index"> {{ data.value }}</td>
                </tr>
                <tr>
                    <th class="v-table_cell">documents</th>
                    <td class="v-table_cell" v-for="(data,index) in request_data[2].data" :key="index"> {{ data.value }}</td>
                </tr>
                <tr>
                    <th class="v-table_cell">categories</th>
                    <td class="v-table_cell" v-for="(data,index) in request_data[3].data" :key="index"> {{ data.value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        request_data: {
            type: Array
        }
    },

    methods: {
        setData(d){
            const date = new Date(d)
            const months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек']
            return months[date.getMonth()]
        }
    }
    
}
</script>

<style lang="scss" scoped>

    .v-table{
        margin-top: 2%;
        overflow-x: scroll;
        margin-left: 1%;
        margin-right: 1%;
        .v-table_cell {
            padding: 10px;
        }
    }

</style>