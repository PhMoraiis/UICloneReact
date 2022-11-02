import styled from 'styled-components';

export const Container = styled.div`
    .colored:nth-child(1) {
background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_2.jpg');
background-size: cover;
}
    .colored:nth-child(2) {
background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_2.jpg');background-size: cover;

}
    .colored:nth-child(3) {
background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_19.jpg');background-size: cover;

}
    .colored:nth-child(4) {
background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_33.jpg');background-size: cover;

}
    .colored:nth-child(5) {
background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_26.jpg');
background-size: cover;

}
    .colored:nth-child(6) {
background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_44.jpg');
background-size: cover;

}
    .colored:nth-child(7) {
background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_6.jpg');
background-size: cover;
}

@media (max-width: 600px){
    .colored:nth-child(1) {
        background-position: center;
    }
    .colored:nth-child(2) {
        background-position: center;
    }
    .colored:nth-child(3) {
        background-position: center;
    }
    .colored:nth-child(4) {
        background-position: center;
    }
    .colored:nth-child(5) {
        background-position: center;
    }
    .colored:nth-child(6) {
        background-position: center;
    }
    .colored:nth-child(7) {
        background-position: center;
    }
}
`;

export const Spacer = styled.div`
    height: 3vh;
    background-color: #37215d;
`;