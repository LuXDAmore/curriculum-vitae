<template>
    <div id="resume3" class="resume">
        <div class="resume-header">
            <div class="triangle" />
            <div class="person-header">
                <div class="person-wrapper">
                    <div class="person">
                        <div class="name">{{person.name.first}} {{person.name.middle}} {{person.name.last}}</div>
                        <div class="position">{{person.position}}</div>
                    </div>
                    <div class="img" />
                </div>

            </div>
        </div>
        <div class="resume-content">
            <div class="experience">
                <h3>{{ lang.experience }}</h3>

                <div
                    v-for="experience in person.experiences"
                    :key="experience.company"
                    class="experience-block"
                >
                    <div class="row">
                        <span class="job-title"> {{experience.position}} </span>
                        <i class="material-icons">details</i>
                        <span class="company"> {{experience.company}} </span>
                    </div>

                    <div class="row">
                        <span class="time-period"> {{experience.timeperiod}}</span>
                        <span class="job-description">, {{experience.description}} </span>
                    </div>
                </div>
            </div>
            <div class="education">
                <h3>{{ lang.education }}</h3>
                <div
                    v-for="education in person.education"
                    :key="education.degree"
                    class="education-block"
                >
                    <div class="row">
                        <span class="degree">{{education.degree}}</span>
                    </div>
                    <div class="row">
                        <span class="degree-description">{{education.description}}</span>
                    </div>
                </div>
            </div>
            <div class="skill-section">
                <h3>{{ lang.skills }}</h3>
                <div
                    v-for="skill in person.skills"
                    :key="skill.name"
                    class="skills"
                >
                    <div class="skill-block">
                        <i class="material-icons">details</i>
                        <span class="skill">{{skill.name}}</span>
                    </div>
                </div>
            </div>
            <div class="skills-other">
                <span>{{person.knowledge}} </span>
            </div>
            <div class="contact">
                <h3>{{ lang.contact }}</h3>
                <a :href="'mailto:'+person.contact.email"> {{person.contact.email}}</a>
                <span>;&nbsp;</span>
                <a :href="'tel:'+person.contact.phone">{{person.contact.phone}}</a>
                <span>;&nbsp;</span>
                <span>{{person.contact.street}}, {{person.contact.city}}</span>
                <span>;&nbsp;</span>
                <a v-if="person.contact.website" :href="person.contact.website">
                    {{person.contact.website}}</a>
                <span v-if="person.contact.website">;&nbsp;</span>
                <a v-if="person.contact.github" :href="'https://github.com/'+person.contact.github">
                    https://github.com/{{person.contact.github}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { getVueOptions } from './options';

    const name = 'oblique';

    export default Vue.component(
        name,
        getVueOptions(
            name,
        ),
    );
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume3 {

    padding-bottom: 50px;
    font-family: "Open Sans Condensed", sans-serif;
    a,
    a:focus,
    a:hover {

        color: black;
        text-decoration: none;

    }
    h3 {

        margin-bottom: 10px;
        font-weight: bold;
        text-transform: uppercase;

    }
    .resume-header .triangle {

        position: absolute;
        top: 0;
        left: -600px;
        width: 0;
        height: 0;
        border-color: #006064 transparent transparent transparent;
        border-style: solid;
        border-width: 600px 0 0 1500px;

    }
    .resume-header .person-header {

        position: absolute;
        top: 200px;
        right: 15%;
        z-index: 20;
        .person-wrapper {

            position: relative;
            overflow: hidden;

        }
        .img {

            position: absolute;
            top: 0;
            right: 0;
            float: left;
            width: 100px;
            height: 100%;
            background: url( "../../resume/id.jpg" );
            background-position: center;
            background-size: cover;

        }
        .person {

            float: right;
            margin-right: 120px;
            color: white;

        }
        .name {

            display: table-caption;
            font-weight: bold;
            font-size: 50px;
            line-height: 1;
            text-align: right;
            text-transform: uppercase;

        }
        .position {

            display: table-caption;
            margin-top: 10px;
            font-size: 20px;
            line-height: 1;
            text-align: right;

        }

    }
    .resume-content {

        width: 70%;
        margin-top: 435px;
        margin-left: 15%;
        .experience .experience-block {

            margin-bottom: 10px;
            line-height: 1;
            .row:first-child {

                font-size: 20px;
                text-transform: uppercase;
                i {

                    font-size: 17px;

                }

            }

        }
        .experience .experience-block:first-of-type {

            width: 80%;

        }

    }
    .education-block {

        margin-bottom: 10px;
        line-height: 1;
        .row:first-child {

            font-size: 20px;
            text-transform: uppercase;

        }

    }
    .skill-section .skills {

        width: 100%;
        .skill-block {

            float: left;
            width: 50%;
            i {

                margin-right: 15px;
                font-size: 17px;

            }
            .skill {

                font-size: 20px;

            }

        }

    }
    .skills-other {

        display: inline-block;
        margin-top: 10px;
        font-size: 20px;
        line-height: 1;

    }
    .contact {

        margin-top: 50px;
        a,
        span {

            display: inline-block;
            float: left;
            margin-top: 0;
            margin-left: 0;
            padding-left: 0;
            font-size: 20px;
            line-height: 1;
            list-style: none;

        }

    }

}
</style>
