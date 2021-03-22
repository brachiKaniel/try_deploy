import React from 'react'
import workspaces from '../workspace.json'
export default function Cards() {
    const projectName = "project1";
    const allWorkspace = { workspaces };
    const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;
    const theCards = []
    allTheWorkspaces.map((item, index) => {
        {
            item.name === projectName ? item.cards.map((item, index) => {
                { theCards.push(item); }
            })
                : console.log("bed", item.cards);
        }
    })
    console.log("the cards", theCards);
    return (
        <>
            <div className="mmm">
                {
                    theCards.map((cards) =>

                        <div>{cards.name}</div>




                    )



                }


            </div>
        </>

    )
}