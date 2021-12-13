import { gql } from "@apollo/client";
//Here all the GraphQL queries will be written.

//Here we write our graphql queries.
//gql function needs to have the queries wrapped with ``.
export const GET_COUNTRY_QUERY = gql`
  query countries($name_Icontains: String!) {
    countries(name_Icontains: $name_Icontains) {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export const GET_SPACEX_LAUNCHES_SINCE = gql`
  query launchesPast {
    launchesPast(limit: 3) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;
