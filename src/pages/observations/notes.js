<Container className={`${mobile && "d-lg-none text-center mb-3"}`}>
      {popularObservations.results.length ? (
        <>
          <div className={styles.Header}>Popular observations</div>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularObservations.results.slice(0, 3).map((observation) => (
                <PopularObservation
                  key={observation.id}
                  observation={observation}
                  mobile
                />
              ))}
            </div>
          ) : (
            popularObservations.results.map((observation) => (
              <PopularObservation
                key={observation.id}
                observation={observation}
              />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>