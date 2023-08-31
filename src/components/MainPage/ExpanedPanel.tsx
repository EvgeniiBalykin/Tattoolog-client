import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import { CloseExpand, OpenExpand } from 'images/index';
import { SyntheticEvent, useState } from 'react';
import { COLORS } from 'ui/colors';

interface IContentPanel {
  expanded: string;
  title: string;
  content: string;
}

const CONTENT_PANELS: IContentPanel[] = [
  {
    expanded: 'parnel1',
    title: 'Is this where I can include some frequently asked questions?',
    content: 'Help your customer imagine how life will be like when using',
  },
  {
    expanded: 'parnel2',
    title: 'Is this where I can include some frequently asked questions?',
    content: 'Help your customer imagine how life will be like when using',
  },
  {
    expanded: 'parnel3',
    title: 'Is this where I can include some frequently asked questions?',
    content: 'Help your customer imagine how life will be like when using',
  },
  {
    expanded: 'parnel4',
    title: 'Is this where I can include some frequently asked questions?',
    content: 'Help your customer imagine how life will be like when using',
  },
];

const ExpandedPanel = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container maxWidth="lg">
      {CONTENT_PANELS.map((el, i) => (
        <Accordion
          expanded={expanded === el.expanded}
          onChange={handleChange(el.expanded)}
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
            <img src={expanded === el.expanded ? CloseExpand : OpenExpand} />
            <Typography
              variant="body1"
              ml={5}
              display="flex"
              alignItems="center"
            >
              {el.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: 'inherit',
              border: `1px solid ${COLORS.PRIMARY}`,
            }}
          >
            <Typography variant="h5" ml={10} mt={3}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default ExpandedPanel;
