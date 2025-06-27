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
                    <p>
                        With 15+ years in frontend development, I specialize in building high-performance applications using Vue.js and Nuxt.js.
                        As an official Nuxt.js contributor and Vue conference speaker, I combine technical expertise with a passion for
                        open-source and mentoring. Available for remote contract work worldwide.<br>
                        <strong>I am Graduated and Certified by <mark><em class="google">Google</em></mark> (by Udacity Scholarship).</strong>
                    </p>
                    <br>
                    <h2>
                        Web developer, web engineering, front-end developer, full stack developer, back-end developer, creative coder, creative technologist
                    </h2>
                    <br>
                    <h3>
                        Writer of performing and responsive applications for web, mobile and native; layout, style, best practices, accessibility, performance optimization, caching techniques, testing, debugging and offline access.
                    </h3>
                </div>
                <div>
                    <router-link
                        to="/resume/lux"
                        class="btn-link"
                        data-content="Open preview (EN) ➡️"
                        target="_self"
                        rel="noopener"
                    >
                        <span class="link-inner">
                            Open preview (EN) ➡️
                        </span>
                    </router-link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <router-link
                        to="/resume/lux?lang=it"
                        class="btn-link"
                        data-content="Apri preview (Italiaon) ➡️"
                        target="_self"
                        rel="noopener"
                    >
                        <span class="link-inner">
                            Apri preview (Italiano) ➡️
                        </span>
                    </router-link>
                </div>
                <div>
                    <a
                        href="/pdf/lux.pdf"
                        class="btn-link"
                        title="Download"
                        data-content="⬇️ Download (EN) ⬇️"
                        target="_blank"
                        rel="noopener"
                        download
                    >
                        <span class="link-inner">
                            ⬇️ Download (EN) ⬇️
                        </span>
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                        href="/pdf/lux-it.pdf"
                        class="btn-link"
                        title="Download"
                        data-content="⬇️ Download (Italiano) ⬇️"
                        target="_blank"
                        rel="noopener"
                        download
                    >
                        <span class="link-inner">
                            ⬇️ Download (Italiano) ⬇️
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
