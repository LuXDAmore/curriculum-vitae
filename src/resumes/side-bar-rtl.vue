<template>
    <div id="resume2" class="resume">
        <div class="top-row">
            <span class="person-name">
                {{person.name.first}} {{person.name.middle}} {{person.name.last}}
            </span>
            <span class="person-position">
                {{person.position}}
            </span>
        </div>
        <div class="right-col">
            <div class="person-image">
                <div class="image-centerer">
                    <div class="img" />
                </div>
            </div>
            <div class="contact">
                <h3>{{ lang.contact }}</h3>
                <div class="contact-row">
                    <a :href="'mailto:'+person.contact.email">{{person.contact.email}}</a>
                </div>
                <div class="contact-row dots">
                    <i class="fa fa-circle" aria-hidden="true" />
                    <i class="fa fa-circle" aria-hidden="true" />
                    <i class="fa fa-circle" aria-hidden="true" />
                </div>
                <div class="contact-row">
                    <a href="'tel:'+person.contact.phone">{{person.contact.phone}}</a>
                </div>
                <div class="contact-row dots">
                    <i class="fa fa-circle" aria-hidden="true" />
                    <i class="fa fa-circle" aria-hidden="true" />
                    <i class="fa fa-circle" aria-hidden="true" />
                </div>
                <div class="contact-row">
                    {{person.contact.street}} <br> {{person.contact.city}}
                </div>
                <div class="contact-row dots">
                    <i class="fa fa-circle" aria-hidden="true" />
                    <i class="fa fa-circle" aria-hidden="true" />
                    <i class="fa fa-circle" aria-hidden="true" />
                </div>
                <div class="contact-row">
                    <a :href="'https://github.com/'+person.contact.github">https://github.com/{{person.contact.github}}</a>
                </div>
            </div>
        </div>
        <div class="left-col">
            <div class="experience">
                <h3>{{ lang.experience }}</h3>
                <div
                    v-for="( experience, index ) in person.experiences"
                    :key="index"
                    class="experience-block"
                >
                    <div class="row">
                        <span class="company"> {{experience.company}} -</span>
                        <span class="job-title"> {{experience.position}} </span>
                    </div>
                    <div class="row">
                        <span class="time-period"> {{experience.timeperiod}}</span>
                    </div>
                    <div class="row">
                        <span class="job-description"> {{experience.description}} </span>
                    </div>
                </div>
            </div>
            <div class="education">
                <h3>{{ lang.education }}</h3>
                <div
                    v-for="( education, index ) in person.education"
                    :key="index"
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
            <div class="skills-block">
                <h3>{{ lang.skills }}</h3>
                <div class="skills">
                    <div
                        v-for="( skill, index ) in person.skills"
                        :key="index"
                        class="skill"
                    >
                        <span class="skill-name">{{skill.name}}</span>
                    </div>
                </div>
                <span class="skills-other"> {{person.knowledge}} </span>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { getVueOptions } from './options';

    const name = 'side-bar-rtl';

    export default Vue.component(
        name,
        getVueOptions(
            name,
        ),
    );
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume2 {

    padding-bottom: 50px;
    font-family: "Raleway", sans-serif;
    direction: rtl;
    text-align: right;
    a,
    a:focus,
    a:hover,
    a:visited {

        text-decoration: none;

    }
    h3 {

        margin-top: 0;
        padding-top: 0;
        font-weight: 400;
        letter-spacing: 5px;
        text-transform: uppercase;

    }
    .top-row {

        width: 100%;
        padding-top: 100px;
        padding-bottom: 100px;
        span {

            display: block;
            width: 100%;
            font-weight: normal;
            text-align: center;

        }
        span.person-name {

            font-size: 50px;
            letter-spacing: 10px;
            text-transform: uppercase;

        }
        span.person-position {

            letter-spacing: 5px;

        }

    }
    .right-col {

        float: right;
        width: 26%;
        padding-right: 8%;
        padding-left: 4%;
        .person-image .image-centerer {

            display: flex;
            justify-content: center;
            height: auto;
            overflow: hidden;
            .img {

                flex: none;
                width: 100%;
                height: 250px;
                background: url( "../../resume/id.jpg" );
                background-position: center;
                background-size: cover;

            }

        }
        .contact h3 {

            margin-top: 20px;
            text-align: center;

        }
        .contact .contact-row {

            margin-bottom: 3px;
            letter-spacing: 2px;
            text-align: center;
            a {

                color: black;

            }

        }
        .contact .contact-row:first-of-type {

            margin-top: 50px;

        }
        .contact .contact-row.dots {

            margin-top: 20px;
            margin-bottom: 15px;
            color: rgba( 153, 153, 153, .6 );
            font-size: 10px;

        }

    }
    .left-col {

        float: left;
        width: 50%;
        padding-right: 4%;
        padding-left: 8%;
        .experience-block {

            margin-bottom: 10px;
            .row:first-child {

                margin-bottom: 3px;

            }
            .row .company {

                font-size: 19px;
                text-transform: uppercase;

            }
            .row .job-title {

                font-size: 19px;

            }

        }
        .education {

            margin-top: 50px;
            .education-block {

                margin-bottom: 10px;
                .degree {

                    margin-bottom: 3px;
                    font-size: 19px;
                    text-transform: uppercase;

                }

            }

        }
        .skills-block {

            position: relative;
            margin-top: 50px;
            .skills {

                position: relative;
                display: inline-block;
                margin-right: auto;
                margin-bottom: 10px;
                margin-bottom: 20px;
                margin-left: auto;
                .skill {

                    position: relative;
                    float: right;
                    width: 80px;
                    height: 80px;
                    margin: 3px;
                    font-size: 13px;
                    border: #333 1px solid;
                    border-radius: 50%;
                    .skill-name {

                        position: absolute;
                        top: 50%;
                        width: 100%;
                        text-align: center;
                        transform: translateY( -50% );

                    }

                }
                .skills-other {

                    display: inline-block;
                    width: 100%;
                    margin-top: 20px;

                }

            }

        }

    }

}
</style>
