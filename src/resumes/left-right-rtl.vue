<template>
    <div id="resume1" class="resume">
        <div class="row text-center">
            <span class="name">{{person.name.first}} {{person.name.middle}} {{person.name.last}}</span>
        </div>
        <div class="row text-center">
            <p class="position center">{{person.position}}</p>
        </div>
        <div class="row">
            <div class="image center">
                <div class="img" />
            </div>
        </div>
        <div class="left half">
            <div class="experience">
                <h3>{{ lang.experience }}</h3>
                <div
                    v-for="experience in person.experiences"
                    :key="experience.company"
                    class="experience-block"
                >
                    <span class="company"> {{experience.company}} </span>
                    <span class="job-title"> {{experience.position}} </span>
                    <span class="time-period"> {{experience.timeperiod}}</span>
                    <span class="job-description"> {{experience.description}} </span>
                </div>
            </div>
            <div class="contact">
                <h3>{{ lang.contact }}</h3>
                <table>
                    <tr>
                        <td><i class="fa fa-envelope" aria-hidden="true" /></td>
                        <td><a :href="'mailto:'+person.contact.email">{{person.contact.email}}</a></td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-phone" aria-hidden="true" /></td>
                        <td><a :href="'tel:'+person.contact.phone">{{person.contact.phone}}</a></td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-home" aria-hidden="true" /></td>
                        <td>{{person.contact.street}} <br> {{person.contact.city}}</td>
                    </tr>
                    <tr v-if="person.contact.website">
                        <td><i class="fa fa-globe" aria-hidden="true" /></td>
                        <td><a :href="person.contact.website">{{person.contact.website}}</a></td>
                    </tr>
                    <tr v-if="person.contact.github">
                        <td><i class="fa fa-github" aria-hidden="true" /></td>
                        <td><a :href="'https://github.com/'+person.contact.github">https://github.com/{{person.contact.github}}</a></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="right half">
            <div class="education">
                <h3>{{ lang.education }}</h3>
                <div
                    v-for="education in person.education"
                    :key="education.degree"
                    class="education-block"
                >
                    <span class="degree">{{education.degree}}</span>
                    <span class="degree-description">{{education.description}}</span>
                </div>
            </div>
            <h3>{{ lang.skills }}</h3>
            <div class="skills">
                <div
                    v-for="skill in person.skills"
                    :key="skill.name"
                    class="skill-block"
                >
                    <span class="skill">{{skill.name}}</span>
                    <div class="skill-bar">
                        <div :style="'width: '+skill.level+'%'" class="level" />
                    </div>
                </div>
            </div>
            <span class="skills-other"> {{person.skillDescription}} </span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { getVueOptions } from './options';
    const name = 'left-right-rtl';

    export default Vue.component(
        name,
        getVueOptions(
            name,
        ),
    );
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume1 {

    padding-bottom: 50px;
    font-size: 20px;
    font-family: "Source Sans Pro", sans-serif;
    direction: rtl;
    a,
    a:focus,
    a:hover,
    a:visited {

        color: #616161;

    }
    h3 {

        margin-bottom: 0;

    }
    span {

        display: inline-block;

    }
    .row {

        width: 100%;

    }
    .half {

        width: 44%;

    }
    .half.left {

        float: left;
        padding-right: 2%;
        padding-left: 4%;
        text-align: right;

    }
    .half.right {

        float: right;
        padding-right: 4%;
        padding-left: 2%;
        text-align: right;

    }
    .center {

        margin-right: auto;
        margin-left: auto;

    }
    .text-center {

        text-align: center;

    }
    .name {

        margin-top: 80px;
        margin-bottom: 5px;
        padding: 10px 20px;
        font-weight: 600;
        font-size: 35px;
        font-family: "Open Sans", sans-serif;
        letter-spacing: 10px;
        text-transform: uppercase;
        border: 1px solid black;

    }
    .position {

        margin-bottom: 40px;
        color: #757575;
        font-size: smaller;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;

    }
    .image {

        width: 100px;
        height: 100px;
        margin-top: 50px;
        margin-bottom: 50px;
        .img {

            width: 100%;
            height: 100%;
            background-image: url( "../../resume/id.jpg" );
            background-repeat: none;
            background-position: center;
            background-size: cover;
            border-radius: 50%;

        }

    }
    .contact {

        width: 100%;
        table {

            float: right;
            margin-top: 5px;
            color: #616161;
            font-size: 20px;
            text-align: right;
            i {

                padding: 2px;
                color: #616161;

            }
            tr td:nth-child(2) {

                vertical-align: top;

            }

        }

    }
    .experience .experience-block span {

        width: 100%;
        color: #616161;

    }
    .experience .experience-block span.company {

        padding-top: 10px;
        padding-bottom: 5px;
        color: #424242;
        font-weight: bold;

    }
    .experience .experience-block span.job-title {

        font-style: italic;

    }
    .education-block span {

        color: #616161;

    }
    .education-block span.degree {

        padding-top: 10px;
        padding-bottom: 5px;
        color: #424242;
        font-weight: bold;

    }
    .skills-other {

        margin-bottom: 10px;
        color: #616161;

    }
    .skills {

        margin-top: 20px;
        margin-bottom: 10px;
        direction: ltr !important;
        .skill-block {

            display: inline-block;
            padding-bottom: 10px;
            .skill {

                float: left;
                width: 100px;
                color: #616161;
                text-align: left;

            }
            .skill-bar {

                position: relative;
                float: right;
                width: 249px;
                height: 8px;
                margin-top: 6.5px;
                overflow: hidden;
                background: #e0e0e0;
                border-radius: 3px;
                .level {

                    height: 100%;
                    background: #757575;

                }

            }

        }

    }

}
</style>
