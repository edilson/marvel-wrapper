const allowedParams = ['limit', 'offset']

const mountRequestParams = (params) => {
  let mountedParameters = '';

  for (let paramKey in params) {
    if (!allowedParams.includes(paramKey)) {
      throw new Error(`Invalid parameter, the only parameters allowed are ${allowedParams}`)
    }

    mountedParameters += `${paramKey}=${params[paramKey]}&`
  }

  return mountedParameters
}

module.exports = mountRequestParams