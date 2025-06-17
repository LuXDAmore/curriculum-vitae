<template>
    <div
        id="resume-lux"
        class="resume"
        :class="{
            'is-website': ! $route.query.pdf,
        }"
    >

        <template v-if="person.cover && person.cover.letter && coverLetter">

            <div class="page-inside cover-letter">

                <vue-css-doodle
                    v-if="! $route.query.pdf"
                    v-once
                    absolute
                    class="no-print"
                    use="var(--rule)"
                    click-to-update
                />

                <section
                    class="cover-letter__section"
                    v-html="coverLetter"
                />

            </div>

            <span class="page-break" />

        </template>

        <aside class="left-column">

            <div class="page-inside">

                <section class="person-container">

                    <div class="img">
                        <img
                            :alt="`${ person.name.first } ${ person.name.last }`"
                            class="picture"
                            src="@/assets/id.jpg"
                        >
                    </div>

                    <div v-if="person.name" class="headline">
                        <h1 v-text="`${ person.name.first } ${ person.name.last }`" />
                    </div>

                    <address v-if="person.contact && person.contact.city">
                        <small>
                            <a
                                :href="`https://google.com/maps/search/${ person.contact.city }`"
                                :title="person.contact.city"
                                target="_blank"
                                rel="noopener"
                                v-text="person.contact.city"
                            />
                        </small>
                    </address>

                    <p v-if="person.position" v-text="person.position" />

                </section>

                <section v-if="person.about" class="about-container">

                    <p
                        class="multi-line-txt"
                        v-text="person.about"
                    />

                </section>

                <section v-if="person.playing" class="playing-container">

                    <hr class="out-of-margins">

                    <blockquote
                        class="multi-line-txt"
                        v-html="person.playing"
                    />

                    <hr class="out-of-margins">

                </section>

                <section v-if="person.knowledge.length" class="knowledge-container">

                    <p
                        v-for="( knowledge, index ) in person.knowledge"
                        :key="index"
                        v-text="knowledge.name"
                    />

                </section>

                <section v-if="person.contact" class="social-container">
                    <small>

                        <h3
                            v-if="lang.contact"
                            class="subheadline"
                            v-text="lang.contact"
                        />

                        <a
                            v-if="person.contact.email"
                            :href="`mailto:${ person.contact.email }`"
                            title="Email"
                            class="hobby-item external-link"
                            target="_blank"
                            rel="noopener"
                        >
                            <i class="contact-icon material-icons">email</i>
                            <span class="contact-icon__label" v-text="person.contact.email" />
                        </a>

                        <a
                            v-if="person.contact.phone"
                            :href="`tel:${ person.contact.phone.split( ' ' ).join( '' ) }`"
                            title="Mobile phone"
                            class="hobby-item external-link"
                            target="_blank"
                            rel="noopener"
                        >
                            <i class="contact-icon material-icons">smartphone</i>
                            <span class="contact-icon__label" v-text="person.contact.phone" />
                        </a>

                        <a
                            v-if="person.contact.linkedin"
                            :href="`${ person.contact.linkedin }`"
                            title="LinkedIn"
                            class="hobby-item external-link"
                            target="_blank"
                            rel="noopener"
                        >
                            <i class="contact-icon material-icons">link</i>
                            <span class="contact-icon__label">LinkedIn</span>
                        </a>

                        <a
                            v-if="person.contact.website"
                            :href="`https://${ person.contact.website }`"
                            title="Website"
                            class="hobby-item external-link"
                            target="_blank"
                            rel="noopener"
                        >
                            <i class="contact-icon material-icons">language</i>
                            <span class="contact-icon__label" v-text="person.contact.website" />
                        </a>

                        <a
                            v-if="person.contact.github"
                            title="Github"
                            :href="`https://github.com/${ person.contact.github }`"
                            class="hobby-item external-link"
                            target="_blank"
                            rel="noopener"
                        >
                            <i class="contact-icon material-icons">code</i>
                            <span class="contact-icon__label" v-text="`github@${ person.contact.github }`" />
                        </a>

                        <a
                            v-if="person.contact.medium"
                            :href="`https://medium.com/@${ person.contact.medium }`"
                            class="hobby-item external-link"
                            title="Medium"
                            target="_blank"
                            rel="noopener"
                        >
                            <i class="contact-icon material-icons">format_align_left</i>
                            <span class="contact-icon__label" v-text="`medium@${ person.contact.github }`" />
                        </a>

                        <a
                            v-if="person.contact.skype"
                            :href="`skype:${ person.contact.skype }`"
                            title="Skype"
                            class="hobby-item external-link"
                            target="_blank"
                            rel="noopener"
                        >
                            <i class="contact-icon material-icons">video_call</i>
                            <span class="contact-icon__label" v-text="person.contact.skype" />
                        </a>

                    </small>
                </section>

                <template v-if="person.hobbies.length">

                    <hr class="out-of-margins">

                    <section class="hobbies-container">
                        <small>
                            <h3
                                v-if="lang.hobbies"
                                class="subheadline"
                                v-text="lang.hobbies"
                            />
                            <div class="hobbies-content">
                                <component
                                    :is="hobby.url ? 'a' : 'p'"
                                    v-for="( hobby, index ) in person.hobbies"
                                    :key="index"
                                    :class="{
                                        'external-link': hobby.url,
                                    }"
                                    :href="hobby.url ? hobby.url : null"
                                    :title="hobby.url ? hobby.name : null"
                                    :rel="hobby.url ? 'noopener' : null"
                                    :target="hobby.url ? '_blank' : null"
                                    class="hobby-item"
                                >
                                    <i
                                        v-if="hobby.iconClass"
                                        :class="hobby.iconClass"
                                        class="hobby-item__icon contact-icon"
                                        v-text="hobby.iconText"
                                    />
                                    <span class="hobby-item__icon-label" v-html="hobby.name" />
                                </component>
                            </div>
                        </small>
                    </section>

                </template>

                <template v-if="person.qualities.length">

                    <hr class="out-of-margins">

                    <section class="hobbies-container">
                        <small>
                            <h3
                                v-if="lang.qualities"
                                class="subheadline"
                                v-text="lang.qualities"
                            />
                            <div class="hobbies-content">
                                <component
                                    :is="hobby.url ? 'a' : 'p'"
                                    v-for="( hobby, index ) in person.qualities"
                                    :key="index"
                                    :class="{
                                        'external-link': hobby.url,
                                    }"
                                    :href="hobby.url ? hobby.url : null"
                                    :title="hobby.url ? hobby.name : null"
                                    :rel="hobby.url ? 'noopener' : null"
                                    :target="hobby.url ? '_blank' : null"
                                    class="hobby-item"
                                >
                                    <i
                                        v-if="hobby.iconClass"
                                        :class="hobby.iconClass"
                                        class="hobby-item__icon contact-icon"
                                        v-text="hobby.iconText"
                                    />
                                    <span class="hobby-item__icon-label" v-html="hobby.name" />
                                </component>
                            </div>
                        </small>
                    </section>

                </template>

            </div>

            <span class="page-break" />

            <div class="page-inside page--next">

                <template v-if="person.education.length">

                    <section class="education-section section section--without-common-styles">

                        <div class="icon">
                            <i class="material-icons">school</i>
                            <h2
                                v-if="lang.education"
                                class="section-headline"
                                v-text="lang.education"
                            />
                        </div>

                        <div class="section-content section-content--no-inset">

                            <a
                                v-for="( education, index ) in person.education"
                                :key="index"
                                :href="education.website || '#'"
                                :title="education.school"
                                rel="noopener"
                                target="_blank"
                                class="section-content__item"
                                @click.native="! education.website && $event.preventDefault()"
                            >
                                <h4
                                    v-if="education.school"
                                    class="section-content__header"
                                    v-text="education.school"
                                />
                                <h4
                                    v-else-if="education.degree"
                                    class="section-content__subheader"
                                    v-text="education.degree"
                                />
                                <span
                                    v-if="education.description"
                                    class="section-content__text--light"
                                    v-text="education.description"
                                />
                                <small
                                    v-if="education.timeperiod"
                                    class="section-content__text"
                                >
                                    <em v-text="education.timeperiod" />
                                </small>
                            </a>

                        </div>

                    </section>

                    <hr class="bigger bigger--bottom out-of-margins">

                </template>

                <template  v-if="person.speaker.length">

                    <section v-if="person.speaker.length" class="speaker-section section section--without-common-styles">

                        <div class="icon">
                            <i class="material-icons">speaker_notes</i>
                            <h2
                                v-if="lang.speaker"
                                class="section-headline"
                                v-text="lang.speaker"
                            />
                        </div>

                        <div class="section-content section-content--no-inset">
                            <a
                                v-for="( speak, index ) in person.speaker"
                                :key="index"
                                :href="speak.website || '#'"
                                :title="speak.school"
                                rel="noopener"
                                target="_blank"
                                class="section-content__item"
                                @click.native="! speak.website && $event.preventDefault()"
                            >
                                <h4
                                    v-if="speak.name"
                                    class="section-content__header"
                                    v-text="speak.name"
                                />
                                <small
                                    v-if="speak.topic"
                                    class="section-content__text--light"
                                >
                                    Topics: <em v-text="speak.topic" />
                                </small>
                            </a>
                        </div>

                    </section>

                    <hr class="bigger bigger--top bigger--bottom out-of-margins">

                </template>

                <template  v-if="person.certifications.length">

                    <section v-if="person.certifications.length" class="certifications-section section section--without-common-styles">

                        <div class="icon">
                            <i class="material-icons">playlist_add_check</i>
                            <h2
                                v-if="lang.certifications"
                                class="section-headline"
                                v-text="lang.certifications"
                            />
                        </div>

                        <div class="section-content section-content--no-inset">
                            <a
                                v-for="( cert, index ) in person.certifications"
                                :key="index"
                                :href="cert.website || '#'"
                                :title="cert.school"
                                rel="noopener"
                                target="_blank"
                                class="section-content__item"
                                @click.native="! cert.website && $event.preventDefault()"
                            >
                                <h4
                                    v-if="cert.name"
                                    class="section-content__header"
                                    v-text="cert.name"
                                />
                                <small
                                    v-if="cert.from"
                                    class="section-content__text--light"
                                >
                                    <em v-text="cert.from" />
                                </small>
                            </a>
                        </div>

                    </section>

                </template>

            </div>

        </aside>

        <main class="right-column">

            <div class="page-inside">

                <section
                    v-if="skillsSortedByLevel"
                    class="skills-section section"
                >

                    <div class="icon">
                        <i class="material-icons">done_all</i>
                        <h2
                            v-if="lang.skills"
                            class="section-headline"
                            v-text="lang.skills"
                        />
                    </div>

                    <div class="section-content-grid section-content-grid--no-padding out-of-margins">
                        <small
                            v-for="( skill, index ) in skillsSortedByLevel"
                            :key="index"
                            class="grid-item"
                        >

                            <i v-if="skill.iconClass" :class="`lang-icon ${ skill.iconClass }`" />

                            <h5
                                v-else-if="skill.name"
                                :class="{
                                    'squarred-grid-item--small': skill.level < 70,
                                    'squarred-grid-item--medium': skill.level >= 70,
                                    'squarred-grid-item--bigger': skill.level >= 90,
                                }"
                                class="squarred-grid-item"
                            >
                                <span class="squarred-grid-item-name" v-text="skill.name" />
                                <span class="squarred-grid-item-level" v-text="`${ skill.level }%`" />
                            </h5>

                        </small>
                    </div>

                </section>

                <section v-if="person.experience.length" class="experience-section section">

                    <div class="icon">
                        <i class="material-icons small-icon">work</i>
                        <h2
                            v-if="lang.experience"
                            class="section-headline"
                            v-text="lang.experience"
                        />
                    </div>

                    <div class="section-content">
                        <div
                            v-for="( experience, index ) in person.experience"
                            :key="index"
                            class="section-content__item"
                        >
                            <div class="section-content__link">
                                <div class="section-content__subheader">

                                    <h4 v-if="experience.company">
                                        <a
                                            :href="experience.website || '#'"
                                            :title="experience.company"
                                            class="section-content__link"
                                            target="_blank"
                                            rel="noopener"
                                            @click.native="! experience.website && $event.preventDefault()"
                                            v-text="experience.company"
                                        />
                                    </h4>

                                    <small v-if="experience.note" class="section-content__text--light experience__note">
                                        <span
                                            v-if="experience.preNote"
                                            class="experience__note experience__note__pre"
                                            v-html="experience.preNote"
                                        />
                                        <em v-text="experience.note" />
                                    </small>

                                </div>

                                <h5
                                    v-if="experience.position"
                                    class="section-content__header"
                                    v-text="experience.position"
                                />

                                <small
                                    v-if="experience.description"
                                    class="section-content__text"
                                    v-html="experience.description"
                                />

                                <small  v-if="experience.timeperiod" class="section-content__text--light">
                                    <em v-text="experience.timeperiod" />
                                </small>

                            </div>
                        </div>
                    </div>

                </section>

            </div>

            <span class="page-break" />

            <div class="page-inside page--next">

                <template v-if="person.projects">

                    <section
                        id="projects"
                        class="projects-section section"
                    >

                        <div class="icon">
                            <i class="material-icons">apps</i>
                            <h2
                                v-if="lang.projects"
                                class="section-headline"
                                v-text="lang.projects"
                            />
                        </div>

                        <div class="section-content">
                            <a
                                v-for="( project, index ) in person.projects"
                                :key="index"
                                :href="project.url || '#'"
                                :title="project.name"
                                class="section-content__item"
                                rel="noopener"
                                target="_blank"
                                @click.native="! project.url && $event.preventDefault()"
                            >

                                <div
                                    v-if="project.name"
                                    class="section-content__header"
                                >

                                    <h4 v-text="project.name" />
                                    <small v-if="project.year" class="section-content__text--light experience__note">
                                        <em v-text="`(${ project.year })`" />
                                    </small>

                                </div>

                                <p
                                    v-if="project.description"
                                    class="section-content__text no--margins"
                                    v-text="project.description"
                                />

                                <small
                                    v-if="project.url || project.platform"
                                    class="section-content__subheader section-content__text--light"
                                >
                                    <em v-if="project.url" v-text="project.url || '#'" />
                                    <pre v-if="project.platform" v-text="project.platform" />
                                </small>
                            </a>
                        </div>

                    </section>

                </template>

                <span v-if="person.repo.length" class="divider" />

                <section
                    v-if="person.repo.length"
                    class="repo-section section"
                >

                    <div class="icon">
                        <i class="material-icons">bug_report</i>
                        <h2
                            v-if="lang.repo"
                            class="section-headline"
                            v-text="lang.repo"
                        />
                    </div>

                    <div class="section-content section-content--repo">
                        <a
                            v-for="( repo, index ) in person.repo"
                            :key="index"
                            :href="repo.url || '#'"
                            :title="repo.name"
                            target="_blank"
                            rel="noopener"
                            class="section-content__item"
                            @click.native="! repo.url && $event.preventDefault()"
                        >
                            <h4
                                v-if="repo.name"
                                class="section-content__header"
                                v-text="repo.name"
                            />
                            <small
                                v-if="repo.description"
                                class="section-content__text"
                                v-html="repo.description"
                            />
                            <small v-if="repo.printUrl && repo.url" class="section-content__text--light word-break--all">
                                <em v-text="repo.url || '#'" />
                            </small>
                        </a>
                    </div>
                </section>

                <template v-if="person.contributions.length">

                    <span class="divider" />

                    <section class="contributions-section section section--without-common-styles">

                        <div class="icon">
                            <i class="material-icons">share</i>
                            <h2
                                v-if="lang.contributions"
                                class="section-headline"
                                v-text="lang.contributions"
                            />
                        </div>

                        <div class="section-content section-content--contributions section-content-grid--no-padding out-of-margins out-of-margins--small">
                            <small class="display--block">
                                <a
                                    v-for="( contribution, index ) in person.contributions"
                                    :key="index"
                                    :href="contribution.url || '#'"
                                    :title="contribution.name"
                                    target="_blank"
                                    rel="noopener"
                                    class="section-content__item no--margins"
                                    @click.native="! contribution.url && $event.preventDefault()"
                                >
                                    <div class="section-content__header">

                                        <h4 v-if="contribution.name" v-text="contribution.name" />

                                        <small
                                            v-if="contribution.description"
                                            class="section-content__text experience__note"
                                            v-text="contribution.description"
                                        />

                                    </div>
                                </a>
                            </small>
                        </div>

                    </section>

                </template>

            </div>

        </main>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { getVueOptions } from './options';

    const name = 'lux';

    export default Vue.component(
        name,
        getVueOptions(
            name,
        ),
    );
</script>

<style
    lang="less"
    src="../less/lux.less"
    scoped
></style>
