import React from 'react'

 const skillText=[
    {
        num:"1. ADIOS",
        title:"꿈을 설계하고 디자인하다.",
        desc:"She said Don't call me tonight 이미 너의 집 골목길 마침 비는 내려와 처량해지네 이제는 ADIOS! ADIOS! 되는 일 하나 없고 머린 지끈지끈대네 무턱대고 화를 내기엔 걸릴 게 많아 내 미래, 돈, 명예, love 못 세 My friend 불을 지펴줘 오늘이 후회 없게 누구라도 please stay with me 젊음은 가 아픔도 지나가 남겨진 건 아쉬운 마음 그 또한 가 ",
    },
    {
        num:"2. ADIOS",
        title:"열심히 할 수록 기회는 따른다.",
        desc:"결국은 떠나가 머물기엔 못내 아픈 청춘이여 No no, don't cry, baby 오 아침이야 아직 해를 볼 준비가 안됐는데 후회없는 하루는 없고 그래서 우리는 살아 망가진 오늘마저 ADIOS! ADIOS! My love 불을 지펴줘 지금이 후회 없게 누구라도 please stay with me 젊음은 가 아픔도 지나가 남겨진 건 아쉬운 마음 그 또한 가 결국은 떠나가 머물기엔 못내 아픈 청춘이여",
    },
    {
        num:"3.",
        title:"3. ADIOS",
        desc:"No no, don't cry, baby Don't call me tonight 오늘은 혼자 견뎌볼게 마침 비는 내려와 후련해지네 이제는 ADIOS! 품위 따위는 집어치우고 All my friends All my love 더 발악해 이 또한 가 All my endings All my starts 더 발악해 이 또한 가 좋아 날뛰고픈 밤",
    },
]

const Skill = () => {
    return (
        <section id='skill'>
            <div className='skill_inner'>
                <h2 className='skill_title'>Challenge <em>나의 도전</em></h2>
                <article className='desc'>
                    {
                        skillText.map((skill,key)=>(
                            <div key={key+1}>
                                <span>{skill.num}</span>
                                <h3>{skill.title}</h3>
                                <p>
                                    {skill.desc}
                                </p>
                            </div>
                        ))
                    }
                    
                    
                </article>
            </div>
        </section>
    )
}

export default Skill
