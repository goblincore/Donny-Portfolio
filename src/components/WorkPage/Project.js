
import React from 'react';

export default function Project(props){

    return(
        <div className="half home-content">
            <div className="home-date">{props.projectInfo.title}</div>
            <div className="home-type dark uppercase">Full Stack Project</div>
            <div className="home-desc">
                <b className="home-desc-part-inner">{props.projectInfo.desc}</b>                   
             </div>
                 <div className="home-details">
                    <div className="home-details-col mobile-hide">
                        <div className="uppercase">
                             <span className="dark">Tech:</span>

                             <span className="text-split ">
                             <span className="home-details-base"><span className="home-details-part">
                                            <b className="home-details-part-inner">PostgreSQL</b></span>

                                        </span>
                                        </span>

                                        </div>
                                        <div className="uppercase">


                                    <span className="dark">Team:</span>


                                        <span className="text-split ">
                                            <span className="home-details-base">
                                            <span className="home-details-part"><b className="home-details-part-inner">Solo</b>
                                            </span>

                                        </span>
                                    </span>

                                    </div>
                                </div>


                                <div className="home-details-col">
                                    <div className="uppercase">
                                        <span className="text-split ">
                                            <span className="home-details-base">
                                                <span className="home-details-part"><b className="home-details-part-inner">React/Redux</b>
                                                </span>
                                            </span>
                                            </span>
                                            </div>
                                        </div>


                                    <div className="home-details-col">
                                    <div className="uppercase">
                                        <span className="text-split ">
                                            <span className="home-details-base">
                                                <span className="home-details-part"><b className="home-details-part-inner">Node/Express</b>
                                                </span>
                                            </span>
                                            </span>
                                            </div>
                                        </div>


                                    </div>

                        
                                        <a className="home-visit" target="_blank" href="http://github.com/goblincore">

                                        <span className="text-split "><span className="home-details-base">
                                        <span className="home-details-part">
                                            <b className="home-details-part-inner">Visit Project</b>
                                        </span>
                                        <span className="home-details-part whitespace"><b className="home-details-part-inner whitespace"> </b></span>

                                        </span>
                                    </span>

                                        <span className="home-visit-arrow">
                                        <img className="home-visit-arrow-b clone" src="/static/media/arrow.b2473d77.svg" role="presentation"/>
                                        <img className="home-visit-arrow-b" src="/static/media/arrow.b2473d77.svg" role="presentation"/>
                                        </span>
                                    </a>
                    </div>

 )

}