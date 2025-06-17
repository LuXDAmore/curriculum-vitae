<template>
    <div class="home">
        <div class="table">
            <div class="table-cell">
                <div class="text--white">
                    <h1 class="text-link">
                        <router-link
                            to="/resume/lux"
                            class="text-link"
                            title="Luca Iaconelli"
                            data-content="Luca Iaconelli"
                            target="_self"
                            rel="noopener"
                        >
                            Luca Iaconelli
                        </router-link>
                    </h1>
                    <h2>
                        Web developer, web engineering, front-end developer, full stack developer, back-end developer, creative coder, creative technologist
                    </h2>
                    <h3>
                        Writer of performing and responsive applications for web, mobile and native; layout, style, best practices, accessibility, performance optimization, caching techniques, testing, debugging and offline access.<br>
                        I graduated from Udacity as a Google mobile web specialist.
                    </h3>
                </div>
                <div>
                    <router-link
                        to="/resume/lux"
                        title="Open preview"
                        class="btn-link"
                        data-content="👁️ Open preview 👁️"
                        target="_self"
                        rel="noopener"
                    >
                        <span class="link-inner">
                            👁️ Open preview 👁️
                        </span>
                    </router-link>
                </div>
                <div>
                    <a
                        href="/pdf/lux.pdf"
                        class="btn-link"
                        title="Download"
                        data-content="⬇️ Download ⬇️"
                        target="_blank"
                        rel="noopener"
                        download
                    >
                        <span class="link-inner">
                            ⬇️ Download ⬇️
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
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
    src="./home.less"
></style>
