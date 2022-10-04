import "./ProfileComponent.css"
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const ProfileComponent = ({ loggedUser }) => {
    const { foundUser, info, lvl } = loggedUser
    const { username, summonerName, role } = foundUser
    const { rank, leaguePoints, losses, tier, wins } = info[0]


    return (
        <div>
            <div className="d-flex justify-content-center">
                <video className="profileVideo" autoPlay muted loop plays-inline>
                    < source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663273316/background-video-d-01_gcjutm.mp4" />
                </video>
            </div>

            <div className="cardProfileAlign">
                <Card className="cardProfileInformation" style={{ width: '45rem', textAlign: 'center' }}>

                    <div className="cardVideoAlign">
                        <video className="cardVideo" autoPlay muted loop plays-inline>
                            < source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1664656377/aprilfools-2018-webm_v7xxos.webm" />
                        </video>
                    </div>

                    <Card.Body>
                        <Card.Title className="text-warning">{username}: {role}</Card.Title>
                        <img className="cardBanner" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664735575/lolDecoration_axoqyx.png" width="450" alt="Banner" />
                        <p>Summoner Name: {summonerName}</p>
                        <p>Elo: {tier} {rank} {leaguePoints} points</p>
                        <p>Wins: {wins}</p>
                        <p>Losses: {losses}</p>
                    </Card.Body>

                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>

                </Card>
            </div>


        </div>

    )
}


export default ProfileComponent