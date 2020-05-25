import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Letters.css';

const From = styled.div`
    text-align: right;
    font-weight: 700;
    margin-right: 10px;
`

export default function Letters(props){
    const LetterStyle = props.numWidth > 600 ? {height: "65vh"} : props.numWidth > 350 ? {height: "50vh"} : {height: "40vh"}
    return(
        <Tabs>
        <TabList>
          <Tab>Rounak</Tab>
          <Tab>Raymond</Tab>
          <Tab>Matt</Tab>
          <Tab>Serena</Tab>
        </TabList>
    
        <TabPanel style={LetterStyle}>
            I don’t think I can fit everything I want to say to y’all in this short letter, but I do know that becoming friends with you guys was the best decision I made at Columbia, maybe ever to be honest. When I joined Spectator in my second semester, I pretty much had only four or five other friends on campus, three of whom were my suitemates. Honestly, that number hasn’t gone up a ton since then, but getting to know every one of you has more than made up for it.
            <br/>
            <br/>
            There’s no way I can thank you guys enough for taking in some random freshman who had no idea what he was doing at Columbia. From our weekly late night Smash games to our monthly late night Spec projects, every bit made me feel included and welcomed.
            <br/>
            <br/>
            Really, the impact you’ve all made on me is unbelievable–both the positive (convincing me to study CS) and the negative (getting me addicted to League) were all worth doing. I don’t think I’d give any of it up for any other path I might have taken.
            <br/>
            <br/>
            If you’ll be at Columbia next year, I’m looking forward to meeting you on campus. And if you won’t be at Columbia, I’m looking forward to hunting you down wherever you end up. So, this isn’t exactly goodbye; see y’all soon!
            <br/>
            <br/>
            <From>
                Rounak
            </From>
        </TabPanel>
        <TabPanel style={LetterStyle}>
            I'm taking this opportunity to thank you all. Our current distance makes the job easier for me; emotional displays are not my strong suit.
            <br/>
            <br/>
            Despite my initial distrust of everybody at Columbia, the kindness and patience you upperclassmen offered at Spec gradually restored my faith in other people. I think the process was rough for you, and in retrospect I feel grateful you didn't kick me out during the times I'd explode from my own immaturity. Perhaps my mental image of you is someone patiently rescuing an aggressive, bitey, flea-infested stray dog.
            <br/>
            <br/>
            I came into freshman year afraid. I felt constant self-imposed fear. Without your influence, it would've taken me longer to get over myself, if at all. You were among the first people I considered to be friends here. Your tolerance of me, especially at my worst, was astounding.
            <br/>
            <br/>
            My life at Columbia would have panned out much worse if it weren't for you. Thank you for being the wonderful people that you are.
            <br/>
            <br/>
            <From>
                Looking forward to bothering you in the future,
            </From>
            <From>
                Raymond
            </From>
        </TabPanel>
        <TabPanel style={LetterStyle}>
            So bear with me - as all you know I'm not really good with words either. I have spent days creating and reformulating all of the different ways to convey my appreciation that I have for yall, only to come to the conclusion that this problem has a null solution set. There exist no words in English (or any language for that matter ) that could ever accurately describe how I feel about yall. This is especially true considering I have the literary skills of a third grader - but if you know me, you know that this isn't anything new .
            <br/>
            <br/>
            The memories I've created with all of you have come to affect me in ways I could not and still can not  believe. I only wish I could give as much back as you all have given me. Each and everyone of you has become an anchor and are my reasons to look forward to a tomorrow. I don't know where I would be without yall and it scares me to think that at one point in time there existed the possibility of never having met any of you. I admire all of you and know yall will do great things in your lives. I couldn't have picked a better family. I love you all. 
            <br/>
            <br/>
            Give it your all and never settle for anything less than the best! And no matter what distance comes between us, know that I will always be thinking of you - wherever yall are. 
            <br/>
            <br/>
            May your hearts be your guiding keys
            <From>
                Matt
            </From>
        </TabPanel>
        <TabPanel style={LetterStyle}>
            People have always told me, “Have fun in college while you can!” To be honest, in the first half of my time at Columbia, I didn’t really know how to have fun, and this was in no small part because I didn’t really care about having fun. Most of you will remember my first year in Spec as someone who was overly caught up in my academic reputation and not (yet) the degenerate fool that I am now. It’s thanks to you guys and this group of friends that I learned how to have fun again—how to let go and enjoy myself without sacrificing the drive that unfortunately guided me to a whole lot of loneliness during my first two years.
            <br/>
            <br/>
            Your friendship and acceptance dragged me out of a dark place in my life that was only getting darker. I don’t want to exaggerate the severity of what I was going through, but I will not sugarcoat it at the expense of undermining the significance of your part in my life. The constancy of your presence, the genuineness of your support, and the enthusiasm of your love I could never take for granted.
            <br/>
            <br/>
            The memories we have made and, I hope, will continue to make are such bright spots in my vision that I begin to forget about the darker ones. When I received my Spec dinner award last semester for achieving the “Fastest Degeneration Over a Semester,” it meant more to me than was probably intended. To me, it reflected that in a semester, you all have helped me become such a happier person, given me an amazing group of friends, and taught me so much about being a good friend and person. Thank you for letting me be a part of your lives and a member of this family.
            <br/>
            <br/>
            To the seniors who will be in New York for another year, I am so so excited to be spending more time with you. To the seniors who are moving on to join the wider world: stay safe, stay wacky, and stay in touch. I wish you the absolute best! Congratulations again for graduating from Columbia University in the greatest city in the world, with the greatest friends in the world.
            <From>
                Love,
            </From>
            <From>
                Serena
            </From>
        </TabPanel>
        <TabPanel style={LetterStyle}>
            The first time I met most of you was at the Spec open house. I don't remember any of the presentation's content, but I still remember thinking, "wow, these people seem really nice." There was no better group of people I could have joined that semester. I was intimidated at first, but you didn't care that I was antisocial and lost: you treated me like part of the family, and that made me feel like I truly belonged for the first time in my college experience. Thank you for welcoming me with open arms. 
            <br/>
            <br/>
            The memories I have of time spent with you are priceless: DJ sessions in NoCo, cooking crepes and scallion pancakes, almost-all-nighters in Hamilton, the best book club discussions I've ever been part of, restaurant outings all over the City, movie nights in Pupin. I was not a big risk-taker when I got to college, but spending time with you all helped me become less afraid of trying new things. I'm inspired by your positivity, curiosity and openness. Thank you for teaching me to enjoy life. 
            <br/>
            <br/>
            Even when I didn't stay in touch as much as I should have after leaving Web Apps, you kept bringing me back into the group for more adventures and fun times. When it felt like my life was falling apart, you were just a message or NoCo visit away. Thank you for letting me be vulnerable and being there for me no matter the circumstances. 
            <br/>
            <br/>
            I feel so lucky to have shared three years with you. You're the best people anyone could hope to meet in college: brilliant, generous, creative, kind, loving, and the perfect kind of quirky. You inspire me to be a better person. No matter where you're headed next, I'm grateful to have you in my life and can't wait to see you again! Congrats on graduating!
            <From>
                Love,
            </From>
            <From>
                Lucie
            </From>
        </TabPanel>
      </Tabs>
    )
}