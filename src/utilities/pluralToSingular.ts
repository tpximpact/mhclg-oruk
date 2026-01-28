/*

correcting v1.0 spec requires

nested array: organization_details.service
nested array: organization_details.review
nested array: organization_details.link_taxonomy
nested array: location_details.service_at_location
nested array: location_details.physical_address
nested array: location_details.accessibility_for_disability

*/

export const pluralToSingular = (str: string): string => {
  // Handle words ending in 'ies' (e.g., 'cities' -> 'city')
  if (str.endsWith('ies')) {
    return str.replace('ies', 'y')
  }

  // Handle words ending in 'es' (e.g., 'addresses' -> 'address')
  if (str.endsWith('es')) {
    return str.replace('es', 'e').replace('ses', 'ss')
  }

  // Handle words ending in 'ves' (e.g., 'wolves' -> 'wolf')
  if (str.endsWith('ves')) {
    return str.replace('ves', 'f')
  }

  // Remove trailing 's'
  if (str.endsWith('s')) {
    return str.slice(0, -1)
  }

  return str // Return original string if no match found
}
