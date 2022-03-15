import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Venue Image',
  name: 'venue',
  widget: 'object',
  summary: 'Venue image',
  fields: [
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'venue',
    },
  ],
}
