import {Link} from "react-router-dom"

const GoBack = () => {
  return (
    <section>
        <div class="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            class="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
          </Link>
        </div>
      </section>

  )
}

export default GoBack
