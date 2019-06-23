//
// IMPORTANT:
// You must update ResourceUrl.RESOURCES_VERSION each time whenever you're modified this file!
//

/* TODO: remove id attributes */
const SeriesSaleImportForm = () => {
	return (
		<div className="row">
			<div className="col-sm-12">
				<div className="row">
					<div className="col-sm-12">
						{/* TODO: add translation: #{t_import_info_who_selling_series} */}
						<h5>
							Import info about selling this series
						</h5>
					</div>
				</div>
				<div className="row">
					{/* TODO: add translation: #{t_could_not_import_info} */}
					{/* TODO: add logic for hiding/showing this element */}
					<div id="import-series-sale-failed-msg"
						className="alert alert-danger text-center col-sm-8 col-sm-offset-2 hidden">
						Could not import information from this page
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<form id="import-series-sale-form" className="form-horizontal">
							
							<div className="form-group form-group-sm">
								{/* TODO: deal with label for+id */}
								{/* TODO: add translation: #{t_url} */}
								<label htmlFor="series-sale-url" className="control-label col-sm-3">
									URL
									<span className="required_field"> *</span>
								</label>
								<div className="col-sm-6">
									<input type="url" id="series-sale-url" className="form-control" required="required" />
									{/* TODO: add logic for hiding/showing this element */}
									<span id="series-sale-url.errors" className="help-block hidden"></span>
								</div>
							</div>
							
							<div className="form-group form-group-sm">
								<div className="col-sm-offset-3 col-sm-4">
									{/* TODO: add translation: #{t_import_info} */}
									<button id="series-sale-submit-btn" type="submit" className="btn btn-primary">
										Import info
									</button>
								</div>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

