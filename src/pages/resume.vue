<template>
    <div class="page-wrapper">
        <div :id="$route.params.resumeid" class="page">
            <div class="page-inner">
                <component :is="$route.params.resumeid" />
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import '../resumes/resumes';
    export default Vue.component(
        'resume',
        {
            name: 'app',
        },
    );
</script>

<style
    scoped
    lang="less"
    src="./resume.less"
></style>
