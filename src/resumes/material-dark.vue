<template>
    <div class="resume">
        <div class="leftCol m_box">
            <div class="shadow" />
            <div id="myselfpic" class="heading" />
            <div class="section-headline">
                {{ lang.contact }}
            </div>
            <div class="item">
                <div class="icon">
                    <i class="material-icons">account_circle</i>
                </div>
                <div class="text">
                    <ul>
                        <li> {{ lang.born }} {{person.birth.year}} {{ lang.bornIn }} {{person.birth.location}}</li>
                    </ul>
                </div>
            </div>

            <div class="item">
                <div class="icon">
                    <i class="material-icons">location_city</i>
                </div>
                <div class="text">
                    <ul>
                        <li>{{person.contact.street}}</li>
                        <li>{{person.contact.city}}</li>
                    </ul>
                </div>
            </div>

            <a :href="'tel:'+person.contact.phone">
                <div class="item">
                    <div class="icon">
                        <i class="material-icons">phone</i>
                    </div>
                    <div class="text">
                        {{person.contact.phone}}
                    </div>
                </div>
            </a>

            <a :href="'mailto:'+person.contact.email">
                <div class="item">
                    <div class="icon">
                        <i class="material-icons">email</i>
                    </div>
                    <div class="text">
                        {{person.contact.email}}
                    </div>
                </div>
            </a>

            <a
                v-if="person.contact.github"
                :href="'https://github.com/'+person.contact.github"
                target="_blank"
            >
                <div class="item">
                    <div class="icon">
                        <i class="fa fa-github" />
                    </div>
                    <div class="text">
                        <span>@{{person.contact.github}}</span>
                        <span>github.com/{{person.contact.github}}</span>
                    </div>
                </div>
            </a>

            <a
                v-if="person.contact.website"
                :href="person.contact.website"
                target="_blank"
            >
                <div class="item">
                    <div class="icon">
                        <i class="material-icons">language</i>
                    </div>
                    <div class="text">
                        <span>{{person.contact.website}}</span>
                    </div>
                </div>
            </a>

            <div class="item last">
                <div class="section-headline">
                    {{ lang.skills }}
                </div>
                <div
                    v-for="skill in person.skills"
                    :key="skill.name"
                    class="skill"
                >
                    <div class="right">
                        <span>{{skill.name}}&nbsp;</span>
                        <div class="progress">
                            <div class="determinate" :style="'width: '+skill.level+'%;'">
                                <i class="fa fa-circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rightCol">
            <div class="title">
                <h2>{{person.name.first}} {{person.name.middle}} {{person.name.last}}</h2>
                <div>{{person.position}}</div>
            </div>

            <div class="section-headline">{{ lang.experience }}</div>
            <div
                v-for="experience in person.experiences"
                :key="experience.company"
                class="block"
            >
                <div class="block-helper" />
                <h3 class="headline">{{experience.position}} - {{experience.company}}</h3>
                <div class="subheadline">{{experience.timeperiod}}</div>
                <p class="info">
                    {{experience.description}}
                </p>
            </div>
            <div class="section-headline">{{ lang.education }}</div>
            <div
                v-for="education in person.education"
                :key="education.degree"
                class="block"
            >
                <div class="block-helper" />
                <div class="headline">{{education.degree}}</div>
                <p class="info">
                    {{education.timeperiod}}, {{education.description}}
                </p>
            </div>
        </div>

        <div style="clear: both;" />
    </div>
</template>

<script>
    import Vue from 'vue';
    import { getVueOptions } from './options';
    const name = 'material-dark';

    export default Vue.component(
        name,
        getVueOptions(
            name,
        ),
    );
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.resume {

    font-family: "Roboto" !important;
    background: #ccc;

}

a {

    cursor: pointer;

}

.description-personal {

    margin-top: 20px;
    margin-left: 20px;
    padding-right: 40px;
    font-family: Roboto;
    text-align: justify;

}

.title {

    right: 25px;
    bottom: 25px;
    padding-top: 20px;
    padding-left: 20px;
    h2 {

        display: block;
        margin-top: 0;
        padding-top: 0;
        color: white;
        color: rgba( 0, 0, 0, .7 );
        font-weight: 400;
        font-size: 1.17em;
        letter-spacing: 10px;
        text-transform: uppercase;
        margin-before: 1em;
        margin-after: 1em;
        margin-start: 0;
        margin-end: 0;

    }
    div {

        display: block;
        margin: 0;
        margin-top: -5px;
        margin-top: 0;
        padding: 0;
        padding-top: 0;
        color: white;
        color: #16151c;
        color: rgba( 63, 61, 60, .71 );
        font-weight: 300;
        font-weight: 500;
        font-size: .67em;
        font-size: 10pt;
        line-height: 15pt;
        letter-spacing: 2px;
        letter-spacing: 3px;
        text-transform: uppercase;
        opacity: .8;
        margin-before: 2.33em;
        margin-start: 0;
        margin-end: 0;

    }

}

.section-headline {

    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: 20px;
    color: #3f3d3c;
    font-weight: 500;
    font-size: 10pt;
    letter-spacing: 3px;
    text-transform: uppercase;
    opacity: .8;

}

.c {

    clear: both;

}

li {

    margin: 0;
    padding: 0;
    padding-top: 9px;
    list-style-type: none;

}

ul {

    margin: 0;
    padding: 0;
    list-style-type: none;

}

p {

    margin-top: 0;
    margin-bottom: 25px;
    font-weight: 300;
    font-size: 10pt;
    font-family: "Roboto", sans-serif;
    line-height: 17pt;

}

.m_box {

    box-shadow: 0 2px 5px 0 rgba( 0, 0, 0, .16 ), 0 2px 10px 0 rgba( 0, 0, 0, .12 );

}

.fa,
.material-icons {

    display: inline-block;
    font-weight: normal;
    font-size: 26px;
    font-style: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

h1,
h3,
h5,
h6 {

    margin: 0;
    font-weight: 400;

}

h2 {

    margin: 0;
    margin: 0;
    font-weight: 400;
    font-weight: 500;
    font-size: 22pt;
    line-height: 37pt;

}

h4 {

    margin: 0;
    font-weight: 400;
    font-size: 12pt;
    line-height: 20pt;
    opacity: 1;

}

.rightCol {

    display: flex;
    flex-direction: column;
    float: right;
    width: 63.5%;
    height: 100%;
    .block {

        position: relative;
        display: inline-block;
        width: 90%;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px 0 rgba( 0, 0, 0, .16 ), 0 2px 10px 0 rgba( 0, 0, 0, .12 );
        .headline {

            display: block;
            color: rgba( 0, 0, 0, .870588 );
            font-weight: 300;
            font-size: 15px;

        }
        .subheadline {

            display: block;
            color: rgba( 0, 0, 0, .541176 );
            font-weight: 300;
            font-size: 14px;

        }
        .info {

            margin-bottom: 0;
            padding-top: 20px;
            color: rgba( 0, 0, 0, .870588 );
            font-size: 14px;

        }
        .icon {

            float: left;
            width: 16%;
            margin-left: 0;
            .fa,
            .material-icons {

                display: block;
                font-size: 30pt;
                text-align: center;

            }

        }
        .content {

            position: absolute;
            left: 17%;
            display: flex;
            flex-direction: column;
            width: 80%;
            height: 96%;
            padding-right: 3%;
            text-align: left;
            .item {

                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
                width: 97%;
                padding-top: 0;
                text-align: left;
                border-bottom: 1px solid #bdbdbd;
                span {

                    margin-top: 0;
                    color: #d8ab94;
                    font-size: 10pt;
                    line-height: 16pt;

                }
                p {

                    margin-top: 5px;

                }

            }
            .item:last-of-type {

                border-bottom-style: none;
                border-bottom-style: none;

            }

        }

    }

}

.leftCol {

    display: block;
    float: left;
    width: 35%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    color: #fff;
    color: rgba( 255, 255, 255, .59 );
    text-align: left;
    background-color: #16151c;
    .section-headline {

        color: rgba( 255, 255, 255, .54 );

    }
    a {

        color: rgba( 255, 255, 255, .59 );
        text-decoration: none;

    }
    .heading {

        position: relative;
        width: 100%;
        height: 277px;
        background-color: white;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

    }
    .item {

        float: left;
        width: 100%;
        margin-top: 13px;
        .fa,
        .material-icons {

            display: inherit;
            text-align: center;

        }
        .icon {

            float: left;
            width: 20%;

        }
        .text {

            display: block;
            float: right;
            width: 69%;
            padding-top: 0;
            padding-right: 10%;
            font-weight: 300;
            font-size: 15px;
            li {

                display: block;
                padding-top: 0;
                font-weight: 300;
                font-size: 15px;

            }

        }
        span {

            font-weight: 300;

        }
        .skill {

            clear: both;
            width: 97%;
            padding-top: 4px;
            .left {

                float: left;
                width: 10%;
                padding-top: 3px;
                i:nth-child(2) {

                    float: left;
                    padding-top: 4px;

                }

            }
            .right {

                float: right;
                width: 93%;
                .progress {

                    position: relative;
                    display: block;
                    float: left;
                    width: 95%;
                    height: 2px;
                    margin: .5rem 0 1rem;
                    margin-bottom: 10px;
                    overflow: visible;
                    background-color: rgba( 255, 255, 255, .19 );
                    border-radius: 2px;
                    .determinate {

                        position: absolute;
                        top: 0;
                        bottom: 0;
                        background-color: #78909c;
                        .fa,
                        .material-icons {

                            position: absolute;
                            top: -4px;
                            right: -2px;
                            margin-left: 50%;
                            color: white;
                            font-size: 13px;

                        }

                    }

                }

            }

        }

    }
    .item.last .text {

        padding-bottom: 0;
        border-bottom-style: none;

    }

}

#myselfpic {

    color: black;
    background-image: url( "../../resume/id.jpg" );

}

#githubIcon {

    width: 25px;
    padding-left: 17px;

}
</style>
