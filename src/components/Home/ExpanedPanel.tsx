import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import { CloseExpand, OpenExpand } from '@images/index';
import { useState } from 'react';
import { COLORS } from '@ui/colors';
import { useTranslation } from 'react-i18next';

interface IContentPanel {
  expanded: string;
  title: string;
  content: string;
}

const CONTENT_PANELS: IContentPanel[] = [
  {
    expanded: 'parnel1',
    title: 'pages.main.faq.block_1.title',
    content: 'pages.main.faq.block_1.content',
  },
  {
    expanded: 'parnel2',
    title: 'pages.main.faq.block_2.title',
    content: 'pages.main.faq.block_2.content',
  },
  {
    expanded: 'parnel3',
    title: 'pages.main.faq.block_3.title',
    content: 'pages.main.faq.block_3.content',
  },
];

const ExpandedPanel = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { t } = useTranslation();
  const handleChange = (panel: string) => (_: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" mb={2} textAlign="center">
        {t('pages.main.additional_block.title')}
      </Typography>
      <Typography variant="h4" textAlign="justify" mb={2}>
        {t('pages.main.additional_block.subtitle')}
      </Typography>
      <Typography variant="h4" textAlign="justify" mb={2}>
        {t('pages.main.additional_block.subtitle_1')}
      </Typography>
      {CONTENT_PANELS.map((el, i) => (
        <Accordion
          expanded={expanded === el.expanded}
          onChange={handleChange(el.expanded)}
          TransitionProps={{ unmountOnExit: true }}
          key={i}
          style={{
            backgroundColor: 'inherit',
            marginBottom: '10px',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`${el.expanded}bh-content`}
            id={`${el.expanded}bh-header`}
            style={{ backgroundColor: COLORS.PRIMARY }}
          >
            <img
              src={expanded === el.expanded ? CloseExpand : OpenExpand}
              width="50px"
              height="50px"
            />
            <Typography variant="h4" ml={5} display="flex" alignItems="center">
              {t(el.title)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: 'inherit',
              border: `1px solid ${COLORS.PRIMARY}`,
            }}
          >
            <Typography variant="h5" ml={10} mt={3}>
              {t(el.content)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default ExpandedPanel;
