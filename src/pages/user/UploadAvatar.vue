<template>
    <div>
        <a-button @click="uploadOne">上传头像</a-button>
        <a-modal title="上传头像" v-model="visible" :maskClosable="false" wrapClassName="form-modal" :destroyOnClose="true">
            <a-upload name="file" :multiple="false" :action="action" @change="uploadOnChange" accept="image/*">
                <a-button>
                    <a-icon type="upload"/>
                    单击上传文件
                </a-button>
            </a-upload>
            <template slot="footer">
                <a-button key="cancel" @click="onCancel">关闭</a-button>
            </template>
        </a-modal>
    </div>
</template>

<script>
    import {fileUploadOneUrlFormatter} from "../../api/file.js"

    export default {
        name: 'UploadAll',
        data() {
            return {
                visible: false,
                form: this.$form.createForm(this),
                action: fileUploadOneUrlFormatter()
            }
        },
        methods: {
            uploadOne() {
                this.visible = true
            },
            onCancel() {
                this.visible = false
                this.$emit('onCancel', this.visible)
            },
            uploadOnChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    this.$message.success(`${info.file.name} 文件上传成功.`);
                } else if (info.file.status === 'error') {
                    this.$message.error(`${info.file.name} 文件上传失败.`);
                }
            },
        },
    }
</script>

<style lang="less" scoped>
    @import "../../assets/styles/common.less";
</style>
