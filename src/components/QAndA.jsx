import React, { useState } from "react";
const QAndA = () => {
    const professions = ["Coronavirus Disease 2019 Basics", "How it Spreads", "How to Protect Yourself", "Symptoms & Testing", "Outbreak in Your Community", "Myth-Nusters of coronavirus"];
    const [myProfession, setMyProfession] = useState("Coronavirus Disease 2019 Basics");


    return (
        <div id='faq' className='container d-flex flex-column mt-5 pt-5 align-items-center'>
            <div className='blue_text mt-5 BoldNum'>FREQUENTLY ASKED QUESTIONS</div>
            <div className='corona_bold_text mt-3 mb-5'>COMMON QUESTION & ANSWER</div>
            <div className='container'>
                <div className="row myDIV ">
                    <div style={{ maxHeight: "200px" }} className="d-grid gap-2 col-12 col-md-12 col-lg-4 mt-5  mb-5">

                        {professions.map(profession => (
                            <button type="button" key={profession} className={"btn btn-outline d-flex flex-raw justify-content-between"} onClick={() => setMyProfession(profession)}>{profession.toLocaleUpperCase()}
                                <i className="fa-solid fa-caret-right"></i></button>
                        ))}
                    </div>

                    <div className="col-12 col-md-12 col-lg-8">
                        <p>
                            {myProfession === "Coronavirus Disease 2019 Basics" && (
                                <div className="col-7 mt-5">
                                    <div className="accordion MinWidth2000px" id="accordionExample">
                                        <div className="accordion-item ">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    what is a novel coronavires ?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body ">
                                                    On February 11, 2020 the World Health Organization announced an official name
                                                    for the disease that is causing the 2019 novel coronavirus outbreak, first identified
                                                    in Wuhan China, The new name of this disease is coronavirus disease 2019,
                                                    abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI for ‘virus,’ and
                                                    ‘D’for disease. Formerly, this disease was referred to as “2019 novel coronavirus”
                                                    or “2019-nCoV".
                                                    <br />


                                                    <div> A novel coronavirus is a new coronavirus that has not been previously identified.
                                                        The virus causing coronavirus disease 2019 (COVID-19), is not the same as the
                                                        <span className="blue_text"> coronaviruses that commonly circulate among humans </span>and cause mild illness, like
                                                        the common cold.</div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Why is the disease being called coronavirus disease 2019, COVID-19?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    On February 11, 2020 the World Health Organization announced an official name
                                                    for the disease that is causing the 2019 novel coronavirus outbreak, first identified
                                                    in Wuhan China, The new name of this disease is coronavirus disease 2019,
                                                    abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ VI for ‘virus,’ and
                                                    ‘D’for disease. Formerly, this disease was referred to as “2019 novel coronavirus”
                                                    or "2019-nCoV"
                                                    <br /><br />
                                                    There are <span className="blue_text"> many types </span>of human coronaviruses including some that commonly
                                                    cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused
                                                    be a novel (or new) coronavirus that has not previously been seen in humans. The
                                                    name of this disease was selected following the World Health Organization (WHO)
                                                    best practiceexternal icon for naming of new human infectious diseases
                                                </div>
                                            </div>

                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                                                    How can people help stop stigma related to COVID-19?

                                                </button>
                                            </h2>
                                            <div id="collapseTree" className="accordion-collapse collapse" aria-labelledby="headingTree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    People can fight stigma and help, not hurt, others by providing social support
                                                    Counter stigma by learning and sharing facts. Communicating the facts that viruses
                                                    do not target specific racial or ethnic groups and how COVID-19 actually spreads
                                                    can help stop stigma.

                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfore">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
                                                    Why might someone blame or avoid individuals and groups?

                                                </button>
                                            </h2>
                                            <div id="collapsefore" className="accordion-collapse collapse" aria-labelledby="headingfore" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    People in the U.S. may be worried or anxious about friends and relatives who are
                                                    living in or visiting areas where COVID-19 is spreading. Some people are worried
                                                    about the disease. Fear and anxiety can lead to social stigma, for example, towards
                                                    Chinese or other Asian Americans or people who were in quarantine
                                                    <br /><br />
                                                    Stigma is discrimination against an identifiable group of people, a place, or a
                                                    nation. Stigma is associated with a lack of knowledge about how COVID-19
                                                    spreads, a need to blame someone, fears about disease and death, and gossip
                                                    that spreads rumors and myths.
                                                    <br /><br />
                                                    Stigma hurts everyone by creating more fear or anger towards ordinary people
                                                    instead of the disease that is causing the problem.

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )}
                            {myProfession === "How it Spreads" && (
                                <div className="col-7 mt-5">
                                    <div className="accordion MinWidth2000px" id="accordionExample">
                                        <div className="accordion-item ">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What is the source of the virus?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body ">
                                                    Coronaviruses are a large family of viruses. Some cause illness in people, and
                                                    others, such as canine and feline coronaviruses, only infect animals. Rarely, animal
                                                    coronaviruses that infect animals have emerged to infect people and can spread
                                                    between people. This is suspected to have occurred for the virus that causes
                                                    COVID-19. Middle East Respiratory Syndrome (MERS) and Severe Acute
                                                    Respiratory Syndrome (SARS) are two other examples of coronaviruses that
                                                    originated from animals and then spread to people. More information about the
                                                    source and spread of COVID-19 is available on the


                                                    <span className="blue_text"> Situation Summary: Source and
                                                        Spread of the Virus.</span>



                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How does the spread?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    This virus was first detected in Wuhan City, Hubei Province, China. The first
                                                    infections were linked to a live animal market, but the virus is now spreading from
                                                    person-to-person. It's important to note that person-to-person spread can happen
                                                    on a continuum. Some viruses are highly contagious (like measles), while other
                                                    viruses are less so
                                                    <br /><br />
                                                    The virus that causes COVID-19 seems to be spreading easily and sustainably in
                                                    the community (‘community spread’) in <span className="blue_text">some affected geographic areas.</span>
                                                    Community spread means people have been infected with the virus in an area,
                                                    including some who are not sure how or where they became infected
                                                    <br /><br />
                                                    Learn what is known about the spread of newly emerged coronaviruses
                                                </div>
                                            </div>

                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                                                    Can someone who has had COVID-19 spread the iliness to others?
                                                </button>
                                            </h2>
                                            <div id="collapseTree" className="accordion-collapse collapse" aria-labelledby="headingTree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    The virus that causes COVID-19 is <span className="blue_text">spreading from person-to-person.</span> Someone
                                                    who is actively sick with COVID-19 can spread the illness to others. That is why
                                                    CDC recommends that these patients be isolated either in the hospital or at home
                                                    (depending on how sick they are) until they are better and no longer pose a risk of
                                                    infecting others.
                                                    <br /><br />
                                                    How long someone is actively sick can vary so the decision on when to release
                                                    someone from isolation is made on a case-by-case basis in consultation with
                                                    doctors, infection prevention and control experts, and public health officials and
                                                    involves considering specifics of each situation including disease severity, illness
                                                    signs and symptoms, and results of laboratory testing for that patient.
                                                    <br /><br />
                                                    Current <span className="blue_text">CDC guidance for when it is OK to release someone from isolation</span> is made
                                                    on a case by case basis and includes meeting all of the following requirements
                                                    <br /><br />
                                                    The patient is free from fever without the use of fever-reducing medications.
                                                    <br /><br />
                                                    ‘The patient is no longer showing symptoms, including cough
                                                    <br /><br />
                                                    the patient has tested negative on at least two consective respiratory specimens collected at least 24 hours apart
                                                    <br /><br />
                                                    Someone whow has been relesed from isolation is not considerd to pose a risk of infection to others
                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfore">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
                                                    Will warm weather stop the outbreak of COVID-19?
                                                </button>
                                            </h2>
                                            <div id="collapsefore" className="accordion-collapse collapse" aria-labelledby="headingfore" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Itis not yet known whether weather and temperature impact the spread of COVID-
                                                    19. Some other viruses, like the common cold and flu, spread more during cold
                                                    weather months but that does not mean it is impossible to become sick with these
                                                    viruses during other months. At this time, it is not known whether the spread of
                                                    COVID-19 will decrease when weather becomes warmer. There is much more to
                                                    leam about the transmissibility, severity, and other features associated with COVID-
                                                    19 and investigations are ongoing
                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                    Can the virus that causes COVID-19 be spread through food including
                                                    refrigerated or frozen food?
                                                </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Coronaviruses are generally thought to be spread from person-to-person through
                                                    respiratory droplets. Currently there is no evidence to support transmission of
                                                    COVID-19 associated with food. Before preparing or eating food itis important to
                                                    always wash your hands with soap and water for 20 seconds for general food
                                                    safety. Throughout the day wash your hands after blowing your nose, coughing or
                                                    sneezing, or going to the bathroom.
                                                    <br /><br />
                                                    It may be possible that a person can get COVID-19 by touching a surface or object
                                                    that has the virus on it and then touching their own mouth, nose, or possibly their
                                                    eyes, but this is not thought to be the main way the virus spreads.
                                                    <br /><br />
                                                    In general, because of poor survivability of these coronaviruses on surfaces, there
                                                    is likely very low risk of spread from food products or packaging that are shipped
                                                    over a period of days or weeks at ambient, refrigerated, or frozen temperatures.
                                                    <br /><br />
                                                    Learn what is known about the<span className="blue_text">spread of COVID-19.</span>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingsix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                    What is community spread?
                                                </button>
                                            </h2>
                                            <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Community spread means people have been infected with the virus ina an area including some who are not sure how or where whey become infected
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )}
                            {myProfession === "How to Protect Yourself" && (
                                <div className="col-7 mt-5">
                                    <div className="accordion MinWidth2000px" id="accordionExample">
                                        <div className="accordion-item ">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What can i do to protect myself and prevent the spread of disease?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body ">
                                                    <span className="BoldNum-2"> Protection measures for everyone</span>
                                                    <br /><br />
                                                    <ul>
                                                        Stay aware of the latest information on the COVID-19 outbreak, available on the
                                                        WHO website and through your national and local public health authority. Many
                                                        countries around the world have seen cases of COVID-19 and several have seen
                                                        outbreaks. Authorities in China and some other countries have succeeded in
                                                        slowing or stopping their outbreaks. However, the situation is unpredictable so
                                                        check regularly for the latest news
                                                        <br /><br />
                                                        You can reduce your chances of being infected or spreading COVID-19 by taking
                                                        some simple precautions:
                                                        <br /><br />
                                                        <li> Regularly and thoroughly clean your hands with an alcohol-based hand rub or
                                                            wash them with soap and water.
                                                            <br /><br />
                                                            <span className="BoldNum-2">Why? </span> Washing your hands with soap and water or using alcohol-based hand
                                                            rub kills viruses that may be on your hands
                                                            <br /><br /></li>
                                                        <li> Maintain at least 1 metre (3 feet) distance between yourself and anyone who is
                                                            coughing or'sneezing.
                                                            <br /><br /> </li>
                                                        <li> Make sure you, and the people around you, follow good respiratory hygiene.
                                                            This means covering your mouth and nose with your bent elbow or tissue when
                                                            you cough or sneeze. Then dispose of the used tissue immediately.
                                                            <br /><br /></li>
                                                        <span className="BoldNum-2">Why? </span>Droplets spread virus. By following good respiratory hygiene you protect
                                                        the people around you from viruses such as cold, flu and COVID-19
                                                        <br /><br />
                                                        <li> Stay home if you feel unwell. If you have a fever, cough and difficulty breathing,
                                                            seek medical attention and call in advance. Follow the directions of your local
                                                            health authority,
                                                            <br /><br /></li>
                                                        <span className="BoldNum-2">Why? </span>National and local authorities will have the most up to date information on
                                                        the situation in your area. Calling in advance will allow your health care provider
                                                        to quickly direct you to the right health facility. This will also protect you and help
                                                        prevent spread of viruses and other infections
                                                        <br /><br />
                                                        <li> Keep up to date on the latest COVID-19 hotspots (cities or local areas where
                                                            COVID-19 is spreading widely). If possible, avoid traveling to places - especially
                                                            if you are an older person or have diabetes, heart or lung disease
                                                            <br /><br /></li>
                                                        <span className="BoldNum-2">Why? </span>You have a higher chance of catching COVID-19 in one of these area
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    what should i do if i had close contact with someone who has COVID-19?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        Household members, intimate partners, and caregivers in a nonhealthcare setting
                                                        may have close contact2 with a person with symptomatic, laboratory-confirmed
                                                        COVID-19 or a person under investigation. Close contacts should monitor their
                                                        health; they should call their healthcare provider right away if they develop
                                                        symptoms suggestive of COVID-19 (e.g., fever, cough, shortness of breath)
                                                        <br /><br />
                                                        Close contacts should also follow these recommendations:
                                                        <br /><br />
                                                        <li> Make sure that you understand and can help the patient follow their healthcare
                                                            provider's instructions for medication(s) and care. You should help the patient
                                                            with basic needs in the home and provide support for getting groceries,
                                                            prescriptions, and other personal needs.</li>
                                                        <br /><br />
                                                        <li> Monitor the patient’s symptoms. If the patient is getting sicker, call his or her
                                                            healthcare provider and tell them that the patient has laboratory-confirmed
                                                            COVID-19. This will help the healthcare provider's office take steps to keep other
                                                            patient has a medical emergency and you need to call 911, notify the dispatch
                                                            personnel that the patient has, or is being evaluated for COVID-19

                                                        </li>
                                                        <br /><br />
                                                        <li>
                                                            Household members should stay in another room or be separated from the
                                                            patient as much as possible. Household members should use a separate
                                                            bedroom and bathroom, if available.
                                                        </li>
                                                        <br /><br />
                                                        <li>
                                                            Prohibit visitors who do not have an essential need to be in the home.
                                                        </li>

                                                        <br /><br />
                                                        
                                                            <br /><br />
                                                            <li>
                                                                Make sure that shared spaces in the home have good air flow, such as by an air
                                                                conditioner or an opened window, weather permitting.

                                                            </li>
                                                            <br /><br />
                                                            <li>
                                                                Perform hand hygiene frequently. Wash your hands often with soap and water
                                                                for at least 20 seconds or use an alcohol-based hand sanitizer that contains 60
                                                                to 95% alcohol, covering all surfaces of your hands and rubbing them together
                                                                until they feel dry. Soap and water should be used preferentially if hands are
                                                                visibly dirty.
                                                            </li>
                                                            Household members should care for any pets in the home. Do not handle pets
                                                            or other animals while sick. For more information, see COVID-19 and Animals.
                                                      

                                                        <br /><br />
                                                        <li>
                                                            Wear a disposable facemask and gloves when you touch or have contact with the patient's blood, stool, or body fluids, such as saliva, sputum, nasal mucus,
                                                            vomit, urine.
                                                            <ul>
                                                                <br />
                                                                <li>Throw out disposable facemasks and gloves after using them. Do not reuse.
                                                                </li>
                                                                <br />
                                                                <li>When removing personal protective equipment, first remove and dispose of
                                                                    gloves. Then, immediately clean your hands with soap and water or alcohol-
                                                                    based hand sanitizer. Next, remove and dispose of facemask, and
                                                                    immediately clean your hands again with soap and water or alcohol-based
                                                                    hand sanitizer.</li>
                                                            </ul>
                                                        </li>

                                                        <br /><br />
                                                        <li>
                                                            Avoid sharing household items with the patient. You should not share dishes,

                                                        </li>
                                                        <br /><br />
                                                        <li>
                                                            patient uses these items, you should wash them thoroughly (see below “Wash
                                                            laundry thoroughly”).
                                                        </li>
                                                        <br />
                                                        <li>
                                                            Clean all “high-touch” surfaces, such as counters, tabletops, doorknobs,
                                                            bathroom fixtures, toilets, phones, keyboards, tablets, and bedside tables, every
                                                            day. Also, clean any surfaces that may have blood, stool, or body fluids on them
                                                            <ul>
                                                                <li> Immediately remove and wash clothes or bedding that have blood, stool, or
                                                                    body fluids on them.</li>
                                                                <li>Wear disposable gloves while handling soiled items and keep soiled items
                                                                    away from your body. Clean your hands (with soap and water or an alcohol-
                                                                    based hand sanitizer) immediately after removing your gloves.</li>
                                                                <li>Read and follow directions on labels of laundry or clothing items and
                                                                    detergent. In general, using a normal laundry detergent according to washing
                                                                    machine instructions and dry thoroughly using the warmest temperatures
                                                                    recommended on the clothing label</li>

                                                            </ul>
                                                        </li>
                                                        <br /><br />
                                                        <li>
                                                            Place all used disposable gloves, facemasks, and other contaminated items in a
                                                            lined container before disposing of them with other household waste. Clean your
                                                            hands (with soap and water or an alcohol-based hand sanitizer) immediately
                                                            after handling these items. Soap and water should be used preferentially if
                                                            hands are visibly dirty.


                                                        </li>
                                                        <br /><br />
                                                        <li>
                                                            Discuss any additional questions with your state or local health department or
                                                            healthcare provider. Check available hours when contacting your local health
                                                            department.</li>


                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                                                    Who is at higher risk for serious illness from COVID-19?

                                                </button>
                                            </h2>
                                            <div id="collapseTree" className="accordion-collapse collapse" aria-labelledby="headingTree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <span className="BoldNum-2">
                                                            Older adults and people of any age who have serious underlying medical
                                                            conditions</span> may be at higher risk for more serious complications from COVID-19
                                                        These people who may be at higher risk of getting very sick from this illness,
                                                        includes.
                                                        <br /><br />
                                                        <li>
                                                            Older adults

                                                        </li>

                                                        <li>
                                                            People who have serious underlying medical conditions like:
                                                            <ul>
                                                                <li>
                                                                    Heart disease
                                                                </li>
                                                                <li>Diabetes</li>
                                                                <li>Lung disease</li>
                                                            </ul>
                                                        </li>
                                                    </ul> </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfore">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
                                                    What should people at higher risk of serious illness with COVID-19 do?
                                                </button>
                                            </h2>
                                            <div id="collapsefore" className="accordion-collapse collapse" aria-labelledby="headingfore" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    If you are at higher risk of getting very sick from COVID-19, you should: stock up on
                                                    supplies; take everyday precautions to keep space between yourself and others;
                                                    when you go out in public, keep away from others who are sick; limit close contact
                                                    and wash your hands often; and avoid crowds, cruise travel, and non-essential
                                                    travel. If there is an outbreak in your community, stay home as much as possible.
                                                    Watch for symptoms and emergency signs. If you get sick, stay home and call your
                                                    doctor. More information on how to prepare, what to do if you get sick, and how
                                                    communities and caregivers can support those at higher risk is available on <span className="blue_text"> People
                                                        at Risk for Serious Illness from COVID-19</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                    Should i wear a mask to protect myself?
                                                </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or
                                                    looking after someone who may have COVID-19. Disposable face mask can only
                                                    be used once. If you are not ill or looking after someone who is ill then you are
                                                    wasting a mask. There is a world-wide shortage of masks, so WHO urges people to
                                                    use masks wisely.

                                                    <br /><br />
                                                    WHO advises rational use of medical masks to avoid unnecessary wastage of
                                                    precious resources and mis-use of masks (<span className="blue_text">see Advice on the use of masks</span>).
                                                    <br /><br />
                                                    The most effective ways to protect yourself and others against COVID-19 are to
                                                    frequently clean your hands, cover your cough with the bend of elbow or tissue and
                                                    maintain a distance of at least 1 meter (3 feet) from people who are coughing or
                                                    sneezing. See basic protective measures against the new coronavirus for more
                                                    information.
                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                </div>
                            )}
                            {myProfession === "Symptoms & Testing" && (
                                <div className="col-7 mt-5">
                                    <div className="accordion MinWidth2000px" id="accordionExample">
                                        <div className="accordion-item ">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What are the symptoms of COVID-19 ?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body ">
                                                    The most common symptoms of COVID-19 are fever, tiredness, and dry cough
                                                    Some patients may have aches and pains, nasal congestion, runny nose, sore
                                                    throat or diarrhea. These symptoms are usually mild and begin gradually. Some
                                                    people become infected but don’t develop any symptoms and don't feel unwell
                                                    Most people (about 80%) recover from the disease without needing special
                                                    treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously
                                                    ill and develops difficulty breathing. Older people, and those with underlying
                                                    medical problems like high blood pressure, heart problems or diabetes, are more
                                                    likely to develop serious illness. People with fever, cough and difficulty breathing
                                                    should seek medical attention.
                                                    <br /><br />
                                                    Read about <span className="blue_text"> COVID-19 Symptoms from CDC.gov.</span>



                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Should i be tested for COVID-19 ?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Not everyone needs to be tested for COVED-19 For information about testing ,see
                                                    <br /><span className="blue_text">Testing for COVID-19 </span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                                                    Where can I get tested for COVID-19?

                                                </button>
                                            </h2>
                                            <div id="collapseTree" className="accordion-collapse collapse" aria-labelledby="headingTree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    The process and locations for testing vary from place to place. Contact your state,
                                                    local, tribal, or territorial department for more information, or reach out to a medical
                                                    provider. State and local public health departments have received tests from CDC.
                                                    while medical providers are getting tests developed by commercial manufacturers,
                                                    While supplies of these tests are increasing, it may still be difficult to find
                                                    someplace to get tested

                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfore">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
                                                    Can a person test negative and later test positive for COVID-197
                                                </button>
                                            </h2>
                                            <div id="collapsefore" className="accordion-collapse collapse" aria-labelledby="headingfore" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Using the CDC-developed diagnostic test, a negative result means that the virus
                                                    that causes COVID-19 was not found in the person's sample. In the early stages of
                                                    infection, it is possible the virus will not be detected.
                                                    <br /><br />
                                                    For COVID-19, a negative test result for a sample collected while a person has
                                                    symptoms likely means that the COVID-19 virus is not causing their current iliness.


                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )}
                            {myProfession === "Outbreak in Your Community" && (
                                <div className="col-7 mt-5">
                                    <div className="accordion MinWidth2000px" id="accordionExample">
                                        <div className="accordion-item ">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What should i do if there is an outbreak in my community?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body ">
                                                    During an outbreak, stay calm and put your preparedness plan to work. Follow the
                                                    steps below:
                                                    <br /><br />
                                                    <span className="blue_text">Protect yourself and others </span>
                                                    <br /><br />
                                                    <ul >
                                                        <li style={{ color: "#0d6efd" }}> <span style={{ color: "black" }}>Stay home if you are sick. Keep away from people who are sick. Limit close
                                                            contact with others as much as possible (about 6 feet)</span>

                                                        </li>
                                                        <br /><br />
                                                        <span className="BoldNum-2">Put your household plan into action.</span>
                                                        <br /><br />
                                                        <li style={{ color: "#0d6efd" }}> <span style={{ color: "black" }}> <span className="BoldNum-2"> Stay informed about the local COVID-19 situation.</span></span>
                                                            <span style={{ color: "black" }}> Be aware of temporary
                                                                school dismissals in your area, as this may affect your household's daily routine.
                                                            </span>
                                                        </li>
                                                        <br /><br />
                                                        <li style={{ color: "#0d6efd" }}> <span style={{ color: "black" }}> <span className="BoldNum-2"> Continue practicing everyday preventive actions.</span></span>

                                                            <span style={{ color: "black" }}> Cover coughs and sneezes
                                                                with a tissue and wash your hands often with soap and water for at least 20
                                                                seconds. If soap and water are not available, use a hand sanitizer that contains
                                                                60% alcohol. Clean frequently touched surfaces and objects daily using a
                                                                regular household detergent and water.
                                                            </span>
                                                        </li>
                                                        <br /><br />
                                                        <li style={{ color: "#0d6efd" }}>
                                                            <span className="BoldNum-2"
                                                                style={{ color: "black" }}>  Notify your workplace as soon as possible if your regular work schedule
                                                                changes.</span> <span style={{ color: "black" }}>Ask to work from home or take leave if you or someone in your
                                                                    household gets sick with COVID-19 symptoms, or if your child's school is
                                                                    dismissed temporarily. </span><a href="">Learn how businesses and employers can plan for and
                                                                        respond to COVID-19.</a>
                                                        </li>
                                                        <br /><br />
                                                        <li style={{ color: "#0d6efd" }}>
                                                            <span className="BoldNum-2" style={{ color: "black" }}> Stay in touch with others by phone or email.</span><span style={{ color: "black" }}> If you have a chronic medical
                                                                condition and live alone, ask family, friends, and health care providers to check
                                                                on you during an outbreak. Stay in touch with family and friends, especially
                                                                those at increased risk of developing severe illness, such as older adults and
                                                                people with severe chronic medical conditions.</span>
                                                        </li>




                                                    </ul>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How do i prepare my children in case of COVID-19 outbreak in our
                                                    community?         </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Outbreaks can be stressful for adults and children. Talk with your children about the
                                                    outbreak, try to stay calm, and reassure them that they are safe. If appropriate,
                                                    explain to them that most illness from COVID-19 seems to be mild.
                                                    <br /> <br />
                                                    <span className="blue_text">Children respond differently to stressful situations than adults
                                                    </span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                                                    What steps should parents take to protect children during a community
                                                    outbreak?

                                                </button>
                                            </h2>
                                            <div id="collapseTree" className="accordion-collapse collapse" aria-labelledby="headingTree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    This is a new virus and we are still learning about it, but so far, there does not seem
                                                    to be a lot of illness in children. Most illness, including serious illness, is happening
                                                    in adults of working age and older adults. If there cases of COVID-19 that impact
                                                    your child’s school, the school may dismiss students. Keep track of school
                                                    dismissals in your community. Read or watch local media sources that report
                                                    school dismissals. If schools are dismissed temporarily, use alternative childcare
                                                    arrangements, if needed.
                                                    <br /><br />
                                                    If your child/children become sick with COVID-19, notify their childcare facility or
                                                    school. Talk with teachers about classroom assignments and activities they can do
                                                    from home to keep up with their schoolwork.
                                                    <br /><br />
                                                    Discourage children and teens from gathering in other public places while school is
                                                    dismissed to help slow the spread of COVID-19 in the community.

                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfore">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
                                                    Will schools be dismissed if there is an outbreak in my community?

                                                </button>
                                            </h2>
                                            <div id="collapsefore" className="accordion-collapse collapse" aria-labelledby="headingfore" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Depending on the situation, public health officials may recommend community
                                                    actions to reduce exposures to COVID-19, such as school dismissals. Read or
                                                    watch local media sources that report school dismissals or and watch for
                                                    communication from your child’s school. If schools are dismissed temporarily,
                                                    discourage students and staff from gathering or socializing anywhere, like at a
                                                    friend's house, a favorite restaurant, or the local shopping mall.


                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                    Can the virus that causes COVID-19 be spread through food, including
                                                    refrigerated or frozen food?

                                                </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Coronaviruses are generally thought to be spread from person-to-person through
                                                    respiratory droplets. Currently there is no evidence to support transmission of
                                                    COVID-19 associated with food. Before preparing or eating food it is important to
                                                    always wash your hands with soap and water for 20 seconds for general food
                                                    safety. Throughout the day wash your hands after blowing your nose, coughing or
                                                    sneezing, or going to the bathroom.
                                                    <br /><br />
                                                    It may be possible that a person can get COVID-19 by touching a surface or object
                                                    that has the virus on it and then touching their own mouth, nose, or possibly their
                                                    eyes, but this is not thought to be the main way the virus spreads.
                                                    <br /><br />
                                                    In general, because of poor survivability of these coronaviruses on surfaces, there
                                                    is likely very low risk of spread from food products or packaging that are shipped
                                                    over a period of days or weeks at ambient, refrigerated, or frozen temperatures.
                                                    <br /><br />

                                                    Learn what is known about the <span className="blue_text">spread of COVID-19.</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingsix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                    Should i go to work if there is an outbreak in my community?

                                                </button>
                                            </h2>
                                            <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Follow the advice of your local health officials. Stay home if you can. Talk to your
                                                    employer to discuss working from home, taking leave if you or someone in your
                                                    household gets sick with  <span className="blue_text">COVID-19 symptoms</span>, or if your child’s school is dismissed
                                                    temporarily. Employers should be aware that more employees may need to stay at
                                                    home to care for sick children or other sick family members than is usual in case of
                                                    a community outbreak.


                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )}
                            {myProfession === "Myth-Nusters of coronavirus" && (
                                <div className="col-7 mt-5">
                                    <div className="accordion MinWidth2000px" id="accordionExample">
                                        <div className="accordion-item ">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    COVID-19 virus can be transmitted in areas with hot and humid

                                                    climates?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body ">
                                                    From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS,
                                                    including areas with hot and humid weather. Regardless of climate, adopt
                                                    protective measures if you live in, or travel to an area reporting COVID-19. The
                                                    best way to protect yourself against COVID-19 is by frequently cleaning your
                                                    hands. By doing this you eliminate viruses that may be on your hands and avoid
                                                    infection that could occur by then touching your eyes, mouth, and nose.
                                                </div>
                                            </div>



                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Cold weather and snow CANNOT kill the new coronavirus
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    There is no reason to believe that cold weather can kill the new coronavirus or
                                                    other diseases. The normal human body temperature remains around 36.5°C to
                                                    37°C, regardless of the external temperature or weather. The most effective way to
                                                    protect yourself against the new coronavirus is by frequently cleaning your hands
                                                    with alcohol-based hand rub or washing them with soap and water.

                                                </div>
                                            </div>

                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                                                    Taking a hot bath does not prevent the new coronavirus disease

                                                </button>
                                            </h2>
                                            <div id="collapseTree" className="accordion-collapse collapse" aria-labelledby="headingTree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Taking a hot bath will not prevent you from catching COVID-19. Your normal body
                                                    temperature remains around 36.5°C to 37°C, regardless of the temperature of your
                                                    bath or shower. Actually, taking a hot bath with extremely hot water can be harmful,
                                                    as it can burn you. The best way to protect yourself against COVID-19 is by
                                                    frequently cleaning your hands. By doing this you eliminate viruses that may be on
                                                    your hands and avoid infection that could occur by then touching your eyes, mouth,
                                                    and nose.

                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfore">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
                                                    The new coronavirus CANNOT be transmitted through mosquito bites.

                                                </button>
                                            </h2>
                                            <div id="collapsefore" className="accordion-collapse collapse" aria-labelledby="headingfore" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    To date there has been no information nor evidence to suggest that the new
                                                    coronavirus could be transmitted by mosquitoes. The new coronavirus is a
                                                    respiratory virus which spreads primarily through droplets generated when an
                                                    infected person coughs or sneezes, or through droplets of saliva or discharge from
                                                    the nose. To protect yourself, clean your hands frequently with an alcohol-based
                                                    hand rub or wash them with soap and water. Also, avoid close contact with anyone
                                                    who is coughing and sneezing.

                                                </div>
                                            </div>

                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                    Are hand dryers effective in killing the new coronavirus?
                                                </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">

                                                    No. Hand dryers are not effective in killing the 2019-nCoV. To protect yourself
                                                    against the new coronavirus, you should frequently clean your hands with an
                                                    alcohol-based hand rub or wash them with soap and water. Once your hands are
                                                    cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.
                                                </div>
                                            </div>

                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingsix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                    Can an ultraviolet disinfection lamp kill the new coronavirus?
                                                </button>
                                            </h2>
                                            <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    UV lamps should not be used to sterilize hands or other areas of skin as UV
                                                    radiation can cause skin irritation.
                                                </div>
                                            </div>

                                        </div>



                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingseven">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                                    How effective are thermal scanners in detecting people infected with the
                                                    new coronavirus?

                                                </button>
                                            </h2>
                                            <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Thermal scanners are effective in detecting people who have developed a fever
                                                    (i.e. have a higher than normal body temperature) because of infection with the
                                                    new coronavirus.
                                                    <br /><br />
                                                    However, they cannot detect people who are infected but are not yet sick with fever.
                                                    This is because it takes between 2 and 10 days before people who are infected
                                                    become sick and develop a fever.
                                                </div>
                                            </div>

                                        </div>



                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingeight">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                                    Do vaccines against pneumonia protect you against the new
                                                    coronavirus?

                                                </button>
                                            </h2>
                                            <div id="collapseeight" className="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">

                                                    No. Vaccines against pneumonia, such as pneumococcal vaccine and
                                                    Haemophilus influenza type B (Hib) vaccine, do not provide protection against the
                                                    new coronavirus.
                                                    <br /><br />
                                                    The virus is so new and different that it needs its own vaccine. Researchers are
                                                    trying to develop a vaccine against 2019-nCoV, and WHO is supporting their
                                                    efforts.
                                                    <br /><br />
                                                    Although these vaccines are not effective against 2019-nCoV, vaccination against
                                                    respiratory illnesses is highly recommended to protect your health.

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )}

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default QAndA;