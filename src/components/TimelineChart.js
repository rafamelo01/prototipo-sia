import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const TimelineChart = () => (
    <Timeline lineColor={'#ddd'}>

        <TimelineItem
            key="001"
            dateText="Jan 2024"
            style={{ color: '#e86971' }}
        >

            <p>A empresa definiu uma política de eliminação de dados pessoais.</p>
            <p>A empresa agora obtem o consentimento dos titulares por escrito, esclarecendo ponto a ponto as finalidades dos dados utilizados.</p>
            <p>A empresa incluiu o cadastro de mais 4 usuários colaboradores.</p>
            <p>A empresa disponibilizou 4 cursos para 10 usuarios colaboradores.</p>
        </TimelineItem>
        <TimelineItem
            key="002"
            dateText="Mar 2024"
            style={{ color: '#e86971' }}
        >

            <p>A empresa definiu um canal de atendimento para atender às solicitações dos titulares.</p>
            <p>A empresa agora garante ao titular de dados pessoais o direito de retirar o consentimento para tratamento de dados a qualquer momento.</p>
            <p>A empresa definiu controles de acesso aos dados, com permissões e controle de usuários.</p>
        </TimelineItem>
        <TimelineItem
            key="003"
            dateText="Jun 2024"
            style={{ color: '#e86971' }}
        >
            <p>A empresa criou uma política de privacidade interna com medidas de boas práticas em relação a proteção de dados pessoais.</p>
            <p>A empresa agora é capaz de categorizar os dados pessoais de acordo com os respectivos titulares.</p>


        </TimelineItem>
        <TimelineItem
            key="004"
            dateText="Set 2024"
            style={{ color: '#e86971' }}
        >

            <p>A empresa criou uma política de normas e diretrizes para terceiros acerca do tema de privacidade e proteção de dados.</p>
            <p>A empresa agora promove treinamentos obrigatórios para funcionários, conscientizando-os sobre as suas responsabilidades em relação à privacidade e proteção de dados pessoais.</p>

        </TimelineItem>
        <TimelineItem
            key="005"
            dateText="Dez 2024"
            style={{ color: '#e86971' }}
        >

            <p>A empresa contratou um Encarregado de dados.</p>
        </TimelineItem>
    </Timeline>
);

export default TimelineChart;
