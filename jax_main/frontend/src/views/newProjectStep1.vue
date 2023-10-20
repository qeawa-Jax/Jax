
<template>
    <NForm
    :model="formValue"
    ref="formRef"
    inline
    :label-width="80"
>
<NFormItem label="1、项目名" path="project.name">
    <NInput v-model:value="formValue.project.name" placeholder="请输入项目名" />
</NFormItem>
<NFormItem label="2、端口" path="project.port">
    <NInput v-model:value="formValue.project.port" placeholder="请输入端口(0~65535)" />
</NFormItem>
<NFormItem >
    <NButton @click="handleClick">
        确认
    </NButton>
</NFormItem>
    </NForm>
</template>

<script setup>
import { ref } from 'vue';
import {Greet} from '../../wailsjs/go/main/App'

function greet(){
    Greet(JSON.stringify(formValue,null,2)).then( result => {
        console.log(result.name)
    })  
        }
function handleClick(e) {
        greet();
    }
const formValue = ref({
    project:{
        name:"",
        port:""
    }
})
</script>